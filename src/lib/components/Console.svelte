<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    const dispatch = createEventDispatcher();

    function hideConsole() {
        dispatch("hide-console");
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(message);
    }

    export let message = "";
</script>

<div class="console-logs rounded" transition:fade>
    <div class="container-fluid container-logs my-3">
        <div class="row h-100">
            <div class="col">
                <span class="h3">Logs</span>
                <div
                    class="btn-group float-end"
                    role="group"
                    aria-label="Menu Flutuante"
                >
                    <button
                        type="button"
                        class="btn btn-secondary"
                        aria-label="Copiar"
                        title="Copiar"
                        on:click={copyToClipboard}
                    >
                        <i class="fas fa-copy" />
                    </button>
                    <button
                        type="button"
                        class="btn btn-secondary"
                        aria-label="Limpar"
                        title="Limpar"
                        on:click={() => (message = "")}
                    >
                        <span><i class="fas fa-eraser" /></span>
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        aria-label="Fechar"
                        title="Fechar"
                        on:click={hideConsole}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="form-group mt-3 text-area-log">
                    <textarea
                        class="form-control mb-2 h-100"
                        rows={6}
                        disabled
                        bind:value={message}
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .console-logs {
        position: fixed;
        bottom: 70px;
        right: 80px;
        z-index: 99;
        width: 600px;
        min-width: 600px;
        height: 305px;
        min-height: 305px;
        background: var(--bg-container-logs);
        border: solid 2px var(--color-border-logs);
        resize: both;
        overflow: auto;
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
        max-height: 75%;
        max-width: 75%;
    }

    @media (max-width: 1100px) {
        .console-logs {
            max-width: 40%;
            max-height: 45%;
        }
    }

    .console-logs .h3 {
        color: var(--color-h3-logs) !important;
    }

    .console-logs textarea {
        color: var(--color-logs) !important;
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        border: none;
        background: var(--bg-text-area-logs) !important;
        resize: none;
        min-height: 200px;
    }

    .container-logs {
        transform: rotateZ(180deg);
        height: calc(100% - 2rem);
    }

    .text-area-log {
        height: calc(100% - 3rem);
    }
</style>
