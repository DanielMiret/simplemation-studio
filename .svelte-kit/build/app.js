import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"pt-br\">\r\n\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\r\n    <link rel=\"shortcut icon\" href=\"/img/icons/icon_1.ico\" type=\"image/x-icon\">\r\n    <link rel='icon' href='/img/icons/icon_1.ico' type='image/x-icon'>\r\n\r\n    <link rel='stylesheet' href='/css/bootstrap.min.css'>\r\n\r\n    " + head + "\r\n</head>\r\n\r\n<body>\r\n    <div id=\"svelte\">" + body + "</div>\r\n</body>\r\n\r\n<script src='/js/fontawesome_all.min.js'></script>\r\n\r\n</html>";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-170adc0a.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-170adc0a.js",assets + "/_app/chunks/vendor-f3701dfd.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: false,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"css/bootstrap.min.css","size":163827,"type":"text/css"},{"file":"fonts/Inter/Inter-Bold.ttf","size":293448,"type":"font/ttf"},{"file":"fonts/Inter/Inter-Light.ttf","size":288088,"type":"font/ttf"},{"file":"fonts/Inter/Inter-Medium.ttf","size":292140,"type":"font/ttf"},{"file":"fonts/Inter/Inter-Regular.ttf","size":287928,"type":"font/ttf"},{"file":"fonts/Inter/Inter-VariableFont_slnt,wght.ttf","size":748068,"type":"font/ttf"},{"file":"fonts/Inter/OFL.txt","size":4459,"type":"text/plain"},{"file":"fonts/Poppins/OFL.txt","size":4478,"type":"text/plain"},{"file":"fonts/Poppins/Poppins-Bold.ttf","size":153900,"type":"font/ttf"},{"file":"fonts/Poppins/Poppins-Light.ttf","size":159848,"type":"font/ttf"},{"file":"fonts/Poppins/Poppins-Regular.ttf","size":158192,"type":"font/ttf"},{"file":"img/home_1.png","size":303927,"type":"image/png"},{"file":"img/home_2.jpg","size":48690,"type":"image/jpeg"},{"file":"img/icons/icon.icns","size":74187,"type":null},{"file":"img/icons/icon.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"img/icons/icon.png","size":113409,"type":"image/png"},{"file":"img/icons/icon_1.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"img/icons/icon_2.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"img/icons/icon_3.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"img/icons/icon_4.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"img/logos/logo.png","size":10292,"type":"image/png"},{"file":"img/logos/logo_black.png","size":9777,"type":"image/png"},{"file":"img/logos/logo_white.png","size":9063,"type":"image/png"},{"file":"js/fontawesome_all.min.js","size":1386093,"type":"application/javascript"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/explorer\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/explorer.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/studio\/?$/,
						params: empty,
						a: ["src/routes/studio/__layout.reset.svelte", "src/routes/studio/index.svelte"],
						b: []
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/explorer.svelte": () => import("..\\..\\src\\routes\\explorer.svelte"),"src/routes/studio/__layout.reset.svelte": () => import("..\\..\\src\\routes\\studio\\__layout.reset.svelte"),"src/routes/studio/index.svelte": () => import("..\\..\\src\\routes\\studio\\index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-f076eeca.js","css":["assets/pages/__layout.svelte-4232b9df.css","assets/app-df3367e1.css"],"js":["pages/__layout.svelte-f076eeca.js","chunks/vendor-f3701dfd.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-e1fb75b7.js","css":[],"js":["error.svelte-e1fb75b7.js","chunks/vendor-f3701dfd.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-5bee1dea.js","css":["assets/pages/index.svelte-711e15b7.css"],"js":["pages/index.svelte-5bee1dea.js","chunks/vendor-f3701dfd.js"],"styles":[]},"src/routes/explorer.svelte":{"entry":"pages/explorer.svelte-ad910c76.js","css":["assets/pages/explorer.svelte-0271b027.css"],"js":["pages/explorer.svelte-ad910c76.js","chunks/vendor-f3701dfd.js"],"styles":[]},"src/routes/studio/__layout.reset.svelte":{"entry":"pages/studio/__layout.reset.svelte-5433e34b.js","css":["assets/app-df3367e1.css"],"js":["pages/studio/__layout.reset.svelte-5433e34b.js","chunks/vendor-f3701dfd.js"],"styles":[]},"src/routes/studio/index.svelte":{"entry":"pages/studio/index.svelte-48c05a37.js","css":["assets/pages/studio/index.svelte-b7649fa9.css"],"js":["pages/studio/index.svelte-48c05a37.js","chunks/vendor-f3701dfd.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}