<script>
    export let components;
    let open = false;

    function toggle(e) {
        e.currentTarget.parentNode.classList.toggle("open");
    }
</script>

{#each components as component (component.id)}
    {#if component.child === undefined}
        <li class="componente my-1 rounded ms-3">
            <i class="{component.icon} me-2 mt-1 ms-3 fa-sm" />{component.name}
        </li>
    {:else}
        <li class="my-1" class:open>
            <span on:click={(e) => toggle(e)}>
                <i
                    class="{component.icon} me-2 mt-1 ms-3 fa-sm"
                />{component.name}
                <i class="fas fa-chevron-down float-end me-3 mt-1 fa-sm" />
            </span>
            <ul><svelte:self components={component.child} /></ul>
        </li>
    {/if}
{/each}

<style>
    .componente {
        cursor: pointer;
        background-color: var(--color-sidebar-componente);
        display: flex;
        margin-right: 16px;
        transition: transform 0.3s ease-in-out;
        transition: border 0.4s ease-in-out;
    }

    .componente:hover {
        border-left: 5px solid #0ddbff;
        transform: scale(1.05);
    }

    li {
        font-size: 17px;
        color: var(--color-text-sidebar);
        list-style: none;
        cursor: pointer;
        user-select: none;
    }

    ul {
        display: none;
        padding-left: 12px !important;
        /* border-left: 2px solid var(--cor-borda-menu-componente); */
    }

    li.open > ul {
        display: block;
    }
</style>
