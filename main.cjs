const { app, BrowserWindow, globalShortcut } = require('electron')
const serve = require('electron-serve')
const windowStateKeeper = require('electron-window-state')
const path = require('path')

const loadURL = serve({ directory: "." })
const dev = !app.isPackaged || (process.env.NODE_ENV == "development")
const port = process.env.PORT || 3000
let mainWindow

function loadVite(port) {
    mainWindow.loadURL(`http://127.0.0.1:${port}`).catch(() => {
        setTimeout(() => { loadVite(port); }, 200)
    })
}

function createWindow() {

    let winState = windowStateKeeper({
        defaultWidth: 1300,
        defaultHeight: 768
    })

    mainWindow = new BrowserWindow({
        x: winState.x,
        y: winState.y,
        width: winState.width,
        height: winState.height,
        minWidth: 1280,
        minHeight: 720,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'static', 'img', 'icons', 'icon.ico'),

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: dev
        }
    })

    winState.manage(mainWindow)

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
        mainWindow.focus()
    })
    mainWindow.once("close", () => { mainwindow = null })

    if (dev) globalShortcut.register('Ctrl+Shift+I', () => mainWindow.webContents.openDevTools())
    dev ? loadVite(port) : loadURL(mainWindow)

}

app.once("ready", createWindow)

app.on("activate", () => { if (!mainWindow) createWindow() })
app.on('window-all-closed', () => {
    globalShortcut.unregisterAll()
    if (process.platform !== 'darwin') app.quit()
})