import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "./app-9d737639.js";
var ExplorerList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".lista-arquivos.svelte-129vwxk{font-size:18px;font-weight:500;cursor:pointer}",
  map: null
};
const ExplorerList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  window.require("electron");
  let { name } = $$props;
  let { date } = $$props;
  let { folder } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.folder === void 0 && $$bindings.folder && folder !== void 0)
    $$bindings.folder(folder);
  $$result.css.add(css$1);
  return `<li class="${"list-group-item lista-arquivos user-select-none mt-1 svelte-129vwxk"}"><span class="${"badge bg-light text-dark mt-1"}">${escape(name)} <small class="${"text-muted mt-2"}">- ${escape(date)}</small></span>

    <div class="${"btn-group float-end"}" role="${"group"}" aria-label="${"Bot\xF5es de Controle"}"><button type="${"button"}" class="${"btn btn-outline-success"}" title="${"Executar Script"}"><i class="${"fas fa-play-circle"}"></i></button>
        <button type="${"button"}" class="${"btn btn-outline-secondary"}" title="${"Abrir local do arquivo"}"><i class="${"fas fa-folder-open"}"></i></button>
        <button type="${"button"}" class="${"btn btn-outline-danger"}" title="${"Mover para a lixeira"}"><i class="${"fas fa-trash"}"></i></button></div>
</li>`;
});
var explorer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pagination.svelte-s39w9v>li.svelte-s39w9v>button.svelte-s39w9v{color:#fff !important;background-color:#212529 !important;border-color:#212529 !important}.linha-escura.svelte-s39w9v.svelte-s39w9v.svelte-s39w9v{height:5px;background-color:#212529;opacity:0.9}",
  map: null
};
const Explorer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  window.require("fs");
  const os = window.require("os");
  const path = window.require("path");
  const directory = path.join(os.homedir(), "Documents", "Simplemation");
  let projects = [];
  $$result.css.add(css);
  return `<div class="${"col"}"><h2 class="${"h3 mb-3 text-center"}">Automa\xE7\xF5es</h2>
    <hr class="${"linha-escura svelte-s39w9v"}">

    <ul class="${"list-group"}">${projects.length ? each(projects, (project) => `${validate_component(ExplorerList, "ExplorerList").$$render($$result, {
    name: project.name,
    date: project.date,
    folder: project.path
  }, {}, {})}`) : `<li class="${"list-group-item"}">Nenhum projeto v\xE1lido localizado na pasta:
                <span class="${"bg-warning"}"><b>${escape(directory)}</b></span>
            </li>`}</ul></div>

<div class="${"col-fluid text-left"}"><hr class="${"linha-escura svelte-s39w9v"}">

    <a class="${"btn btn-dark float-start"}" href="${"/"}"><i class="${"fas fa-arrow-left"}"></i>
        <span>Voltar</span></a>

    <nav aria-label="${"Paginacao dos Scripts"}"><ul class="${"pagination justify-content-end svelte-s39w9v"}"><li class="${"page-item disabled svelte-s39w9v"}"><button type="${"button"}" class="${"page-link svelte-s39w9v"}" tabindex="${"-1"}" aria-disabled="${"true"}">Anterior</button></li>
            <li class="${"page-item svelte-s39w9v"}"><button type="${"button"}" class="${"page-link svelte-s39w9v"}">1</button></li>
            <li class="${"page-item svelte-s39w9v"}"><button type="${"button"}" class="${"page-link svelte-s39w9v"}">2</button></li>
            <li class="${"page-item svelte-s39w9v"}"><button type="${"button"}" class="${"page-link svelte-s39w9v"}">3</button></li>
            <li class="${"page-item svelte-s39w9v"}"><button type="${"button"}" class="${"page-link svelte-s39w9v"}">Pr\xF3ximo</button></li></ul></nav>
</div>`;
});
export { Explorer as default };
