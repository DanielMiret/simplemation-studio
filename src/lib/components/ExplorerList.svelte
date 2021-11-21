<script>
    import { slide } from "svelte/transition";
    const { shell } = window.require("electron");

    export let name;
    export let date;
    export let folder;

    function runProject(folder) {
        //TO DO
        shell.beep();
    }

    function showProjectFolder(folder) {
        shell.showItemInFolder(folder);
    }

    function deleteProject(folder) {
        shell.trashItem(folder);
    }
</script>

<li class="list-group-item lista-arquivos user-select-none mt-1" in:slide>
    <span class="badge bg-light text-dark mt-1">
        {name} <small class="text-muted mt-2"> - {date}</small>
    </span>

    <div
        class="btn-group float-end"
        role="group"
        aria-label="Botões de Controle"
    >
        <button
            type="button"
            class="btn btn-outline-success"
            title="Executar Script"
            on:click={runProject(folder)}
        >
            <i class="fas fa-play-circle" />
        </button>
        <button
            type="button"
            class="btn btn-outline-secondary"
            title="Abrir local do arquivo"
            on:click={showProjectFolder(folder)}
        >
            <i class="fas fa-folder-open" />
        </button>
        <button
            type="button"
            class="btn btn-outline-danger"
            title="Mover para a lixeira"
            on:click={deleteProject(folder)}
        >
            <i class="fas fa-trash" />
        </button>
    </div>
</li>

<style>
    .lista-arquivos {
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
</style>
