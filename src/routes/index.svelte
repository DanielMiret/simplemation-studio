<svelte:head>
    <title>Simplemation</title>
</svelte:head>

<div class="col-6 text-center gy-2 gx-3">
    <a href="/studio" class="text-white text-decoration-none">
        <div class="card text-white">
            <img
                class="card-img card-overlay"
                src="/img/home_1.png"
                alt="Nova Automação"
                draggable="false"
            />
            <div class="card-img-overlay card-overlay py-5 px-4">
                <svg
                    class="card-icon"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="grad1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop class="svg-stop1" offset="0%" />
                            <stop class="svg-stop2" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="url(#grad1)"
                        d="M0 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm9.5 5.5h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-6.354-.354L4.793 6.5 3.146 4.854a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708z"
                    />
                </svg>
                <p class="card-title h3 pt-2 font-weight-bold">
                    Nova Automação
                </p>
            </div>
        </div>
    </a>
</div>

<div class="col-6 text-center gy-2 gx-3">
    <a href="/explorer" class="text-white text-decoration-none">
        <div class="card text-white">
            <img
                class="card-img card-overlay"
                src="/img/home_2.jpg"
                alt="Abrir Automação"
                draggable="false"
            />
            <div class="card-img-overlay card-overlay py-5 px-4">
                <svg
                    class="card-icon"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="url(#grad1)"
                        d="M9.828 3h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0113.174 14H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 006.172 2H2.5a1 1 0 00-1 .981l.006.139z"
                    />
                </svg>
                <p class="card-title h3 pt-2 font-weight-bold">
                    Abrir Automação
                </p>
            </div>
        </div>
    </a>
</div>

<style>
    .card {
        box-shadow: 0 32px 44px -24px rgba(0, 0, 0, 0.23),
            0 20px 25px 0px rgba(0, 0, 0, 0.12),
            0 15px 10px -10px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        height: 330px;
        transition: all 400ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }

    .card:hover {
        transform: scale(1.03);
    }

    .card-overlay {
        background-color: rgba(0, 0, 0, 0.7) !important;
        border-radius: 6px !important;
        height: 330px !important;
    }

    .card-icon {
        margin-top: 80px;
        font-size: 35px;
    }

    .svg-stop1 {
        stop-color: rgb(13, 218, 255);
        stop-opacity: 1;
    }

    .svg-stop2 {
        stop-color: rgb(0, 255, 151);
        stop-opacity: 1;
    }
</style>
