<script>
    import { onDestroy } from "svelte";
    import MenuComponente from "./MenuComponente.svelte";
    import { componentStore } from "$lib/stores/components";

    let active = false;
    let menuComponents = [];

    const unsubscribe = componentStore.subscribe(
        (data) => (menuComponents = data)
    );

    onDestroy(() => {
        unsubscribe();
    });
</script>

<nav class="sidebar" class:active>
    <div class="menu-componentes">
        <button
            type="button"
            class="text-white sidebar-collapse"
            on:click={() => (active = !active)}
        >
            <i class="fas fa-bars" />
            <span class="sr-only">Alternar menu</span>
        </button>
    </div>

    <div class="py-3 px-3">
        <a href="/">
            <img
                src="/img/logos/logo.png"
                class="img-fluid mb-3"
                alt="Logo Simplemation"
                draggable="false"
            />
        </a>
        <input
            type="text"
            class="form-control mt-3 pesquisar"
            placeholder="Pesquisar... "
        />
    </div>

    <ul class="menu-componente">
        <MenuComponente components={menuComponents} />
    </ul>
</nav>

<style>
    .sidebar {
        min-width: 280px;
        max-width: 280px;
        padding-top: 0.5rem;
        background: var(--bg-sidebar);
        transition: all 0.3s;
        position: relative;
        height: 100%;
        min-height: 100vh;
    }

    .sidebar.active {
        margin-left: -280px;
    }

    .sidebar.active .menu-componentes {
        margin-right: -45px;
    }

    .sidebar .menu-componentes {
        display: inline-block;
        position: absolute;
        top: 20px;
        right: 0;
        margin-right: -20px;
        transition: all 0.3s;
    }

    @media (max-width: 991.98px) {
        .sidebar {
            margin-left: -250px;
        }
        .sidebar.active {
            margin-left: 0;
        }
        .sidebar .menu-componentes {
            margin-right: -50px !important;
            top: 10px !important;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .sidebar .menu-componentes {
            transition: none;
        }
    }

    .sidebar-collapse {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--bg-sidebar-colapse) !important;
        border-color: var(--color-colapse) !important;
        outline: none !important;
    }

    .pesquisar {
        font-size: 16px;
    }

    .menu-componente {
        list-style-type: none;
        padding-left: 0 !important;
    }
</style>
