import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV == "development"

export default {
    kit: {
        adapter: adapter(),
        vite: {
            compilerOptions: { dev },
            plugins: []
        }
    },

    preprocess: preprocess(),
};
