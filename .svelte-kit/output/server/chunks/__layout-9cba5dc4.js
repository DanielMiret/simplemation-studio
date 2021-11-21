import { c as create_ssr_component, e as escape } from "./app-9d737639.js";
/* empty css              */var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".linha-escura.svelte-lvg1ha{height:5px;background-color:#212529;opacity:0.9}.bg-dark-smp.svelte-lvg1ha{background-color:#212529}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ano = new Date().getFullYear();
  $$result.css.add(css);
  return `<div class="${"container"}"><div class="${"row"}"><div class="${"col text-center mt-2 py-2"}"><img class="${"img-fluid "}" src="${"/img/logos/logo.png"}" alt="${"Simplemation Logo"}" draggable="${"false"}">
            <hr class="${"linha-escura svelte-lvg1ha"}"></div></div>
    <div class="${"row"}">${slots.default ? slots.default({}) : ``}</div></div>

<footer><div class="${"container-fluid"}"><div class="${"text-center bg-dark-smp fixed-bottom p-3 text-white svelte-lvg1ha"}"><div class="${"col"}"><span>Simplemation\xAE - Todos os direitos reservados - ${escape(ano)}</span></div></div></div>
</footer>`;
});
export { _layout as default };
