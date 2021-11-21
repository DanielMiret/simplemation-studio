<script>
    import { onMount } from "svelte";
    import ExplorerList from "../lib/components/ExplorerList.svelte";

    const { promises: fs } = window.require("fs");
    const os = window.require("os");
    const path = window.require("path");

    const directory = path.join(os.homedir(), "Documents", "Simplemation");
    let projects = [];

    async function getProjects() {
        const directories = await fs.readdir(directory);
        directories.forEach(async (folder) => {
            let files = await fs.readdir(path.join(directory, folder));
            files
                .filter((file) => file.includes("main.simpl"))
                .forEach(async (file) => {
                    const script = path.join(directory, folder, file);
                    const date = await fs.stat(script);
                    projects.push({
                        name: folder,
                        path: script,
                        date: date.mtime.toLocaleDateString("pt-BR", {
                            hour: "numeric",
                            minute: "numeric",
                        }),
                    });
                    projects = projects;
                });
        });
    }

    onMount(async () => {
        try {
            await getProjects();
        } catch (e) {
            console.error(e);
        }
    });
</script>

<div class="col">
    <h2 class="h3 mb-3 text-center">Automações</h2>
    <hr class="linha-escura" />

    <ul class="list-group">
        {#each projects as project}
            <ExplorerList
                name={project.name}
                date={project.date}
                folder={project.path}
            />
        {:else}
            <li class="list-group-item">
                Nenhum projeto válido localizado na pasta:
                <span class="bg-warning">
                    <b>{directory}</b>
                </span>
            </li>
        {/each}
    </ul>
</div>

<div class="col-fluid text-left">
    <hr class="linha-escura" />

    <a class="btn btn-dark float-start" href="/">
        <i class="fas fa-arrow-left" />
        <span> Voltar</span>
    </a>

    <nav aria-label="Paginacao dos Scripts">
        <ul class="pagination justify-content-end">
            <li class="page-item disabled">
                <button
                    type="button"
                    class="page-link"
                    tabIndex="-1"
                    aria-disabled="true">Anterior</button
                >
            </li>
            <li class="page-item">
                <button type="button" class="page-link">1</button>
            </li>
            <li class="page-item">
                <button type="button" class="page-link">2</button>
            </li>
            <li class="page-item">
                <button type="button" class="page-link">3</button>
            </li>
            <li class="page-item">
                <button type="button" class="page-link">Próximo</button>
            </li>
        </ul>
    </nav>
</div>

<style>
    .pagination > li > button {
        color: #fff !important;
        background-color: #212529 !important;
        border-color: #212529 !important;
    }
    .linha-escura {
        height: 5px;
        background-color: #212529;
        opacity: 0.9;
    }
</style>
