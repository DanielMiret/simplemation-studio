<script>
    import "../app.scss";
    let ano = new Date().getFullYear();
</script>

<div class="container">
    <div class="row">
        <div class="col text-center mt-2 py-2">
            <img
                class="img-fluid "
                src="/img/logos/logo.png"
                alt="Simplemation Logo"
                draggable="false"
            />
            <hr class="linha-escura" />
        </div>
    </div>
    <div class="row">
        <slot />
    </div>
</div>

<footer>
    <div class="container-fluid">
        <div class="text-center bg-dark-smp fixed-bottom p-3 text-white">
            <div class="col">
                <span>
                    Simplemation® - Todos os direitos reservados - {ano}
                </span>
            </div>
        </div>
    </div>
</footer>

<style>
    .linha-escura {
        height: 5px;
        background-color: #212529;
        opacity: 0.9;
    }
    .bg-dark-smp {
        background-color: #212529;
    }
</style>
