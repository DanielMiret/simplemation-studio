<script>
    export let script_name = "";
</script>

<div class="container-fluid my-5 ms-5 me-1">
    <div class="row">
        <div class="col">
            <div class="form-group me-5 ms-3 mb-4">
                <input
                    type="text"
                    class="form-control input-nome"
                    placeholder="Nome do Projeto"
                    bind:value={script_name}
                />
            </div>
            <hr class="ms-4 me-5 hr-nome-script" />
        </div>
    </div>
    <div class="row">
        <div class="col ms-4 me-3" />
    </div>
</div>

<style>
    .input-nome,
    .input-nome:hover,
    .input-nome:focus {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        color: var(--color-input-script-name) !important;
        font-size: 2rem !important;
        font-weight: 500 !important;
    }

    .input-nome::-webkit-input-placeholder {
        color: var(--bg-container-hr) !important;
        opacity: 1 !important;
    }

    .input-nome:-ms-input-placeholder {
        color: var(--bg-container-hr) !important;
        opacity: 1 !important;
    }

    .input-nome::-ms-input-placeholder {
        color: var(--bg-container-hr) !important;
        opacity: 1 !important;
    }

    .input-nome::placeholder {
        color: var(--bg-container-hr) !important;
        opacity: 1 !important;
    }

    .hr-nome-script {
        height: 5px !important;
        background-color: var(--bg-container-hr) !important;
        opacity: 0.9 !important;
    }
</style>
