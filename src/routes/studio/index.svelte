<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuFlutuante from "$lib/components/MenuFlutuante.svelte";
    import ScriptArea from "$lib/components/ScriptArea.svelte";

    import { fade } from "svelte/transition";

    function changeTheme() {
        // Temporary
        if (localStorage.getItem("theme") !== "dark") {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }
</script>

<div class="container-studio wrapper d-flex" in:fade>
    <Menu />
    <MenuFlutuante on:change-theme={changeTheme} />
    <ScriptArea />
</div>

<style>
    .container-studio {
        background-color: var(--bg-container-script);
    }
</style>
