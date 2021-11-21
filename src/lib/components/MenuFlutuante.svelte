<script>
    import { createEventDispatcher } from "svelte";
    import Console from "$lib/components/Console.svelte";

    let show_console = false;
    let running = false;
    let interval;

    const dispatch = createEventDispatcher();

    function toogleTheme() {
        dispatch("change-theme");
    }

    function runScript() {
        running = true;
        show_console = true;
        interval = setInterval(() => {
            running = false;
            show_console = false;
            clearInterval(interval);
        }, 5000);
    }
</script>

<div
    class="btn-group menu-flutuante text-white"
    role="group"
    aria-label="Menu Flutuante"
>
    <span
        class="btn btn-danger rounded ms-1"
        title="Salvar"
        aria-label="Salvar Script"
    >
        <i class="fas fa-save" />
    </span>

    <span
        class="btn btn-secondary rounded ms-1"
        title="Logs"
        aria-label="Logs da Execução"
        on:click={() => (show_console = !show_console)}
    >
        <i class="fas fa-file-alt" /> Logs
    </span>

    <button
        class="btn btn-success rounded ms-1 me-1"
        title="Executar"
        aria-label="Executar Script"
        disabled={running}
        on:click={runScript}
    >
        <i class="fas fa-play-circle" /> Executar
    </button>

    <div class="menu-flutuante-vertical">
        <div class="menu-flutuante-icone-ativo menu-flutuante-icone">
            <span><i class="fas fa-cog" /></span>
        </div>

        <ul class="menu-flutuante-opcoes">
            <li>
                <span class="menu-flutuante-descricao">Relatar Problema</span>
                <div class="menu-flutuante-icone">
                    <span><i class="fas fa-bug" /></span>
                </div>
            </li>
            <li>
                <span class="menu-flutuante-descricao">Documentação</span>
                <div class="menu-flutuante-icone">
                    <span><i class="fas fa-file-alt" /></span>
                </div>
            </li>
            <li>
                <span class="menu-flutuante-descricao">Alterar Idioma</span>
                <div class="menu-flutuante-icone">
                    <span><i class="fas fa-language" /></span>
                </div>
            </li>
            <li>
                <span class="menu-flutuante-descricao">Mudar Tema</span>
                <div class="menu-flutuante-icone" on:click={toogleTheme}>
                    <span><i class="fas fa-adjust" /></span>
                </div>
            </li>
        </ul>
    </div>
</div>

{#if show_console}
    <Console on:hide-console={() => (show_console = !show_console)} />
{/if}

<style>
    .menu-flutuante {
        position: fixed !important;
        bottom: 20px;
        right: 78px;
        z-index: 99;
    }
    .menu-flutuante-vertical {
        position: fixed;
        bottom: 10px;
        right: 15px;
        z-index: 999;
        cursor: pointer;
    }

    .menu-flutuante-icone {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: var(--bg-btn-2-hover);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .menu-flutuante-icone:hover {
        opacity: 0.8;
    }

    .menu-flutuante-icone span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 25px;
        color: var(--color-icon-config);
    }

    .menu-flutuante-vertical > .menu-flutuante-icone-ativo {
        width: 60px;
        height: 60px;
        background: var(--bg-btn-2-hover);
    }

    .menu-flutuante-opcoes {
        list-style-type: none;
        margin: 0;
        position: absolute;
        bottom: 70px;
        right: 0;
        opacity: 0;
        transition: all 0.4s ease;
        transform: scale(0);
        transform-origin: 85% bottom;
    }

    .menu-flutuante-icone-ativo:hover + .menu-flutuante-opcoes,
    .menu-flutuante-opcoes:hover {
        opacity: 1;
        transform: scale(1);
    }

    .menu-flutuante-opcoes li {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
    }

    .menu-flutuante-descricao {
        padding: 2px 5px;
        align-self: center;
        user-select: none;
        white-space: nowrap;
        border-radius: 3px;
        font-size: 16px;
        background: var(--bg-hover-options-config);
        color: var(--color-hover-options-config);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        margin-right: 10px;
        cursor: default;
    }
</style>
