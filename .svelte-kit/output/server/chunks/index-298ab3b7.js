import { c as create_ssr_component, a as each, e as escape, v as validate_component, n as noop, s as safe_not_equal, o as onDestroy, b as createEventDispatcher, d as add_attribute } from "./app-9d737639.js";
var MenuComponente_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".componente.svelte-krdlze.svelte-krdlze{cursor:pointer;background-color:var(--color-sidebar-componente);display:flex;margin-right:16px;transition:transform 0.3s ease-in-out;transition:border 0.4s ease-in-out}.componente.svelte-krdlze.svelte-krdlze:hover{border-left:5px solid #0ddbff;transform:scale(1.05)}li.svelte-krdlze.svelte-krdlze{font-size:17px;color:var(--color-text-sidebar);list-style:none;cursor:pointer;user-select:none}ul.svelte-krdlze.svelte-krdlze{display:none;padding-left:12px !important}li.open.svelte-krdlze>ul.svelte-krdlze{display:block}",
  map: null
};
const MenuComponente = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components } = $$props;
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  $$result.css.add(css$4);
  return `${each(components, (component) => `${component.child === void 0 ? `<li class="${"componente my-1 rounded ms-3 svelte-krdlze"}"><i class="${escape(component.icon) + " me-2 mt-1 ms-3 fa-sm svelte-krdlze"}"></i>${escape(component.name)}
        </li>` : `<li class="${["my-1 svelte-krdlze", ""].join(" ").trim()}"><span><i class="${escape(component.icon) + " me-2 mt-1 ms-3 fa-sm svelte-krdlze"}"></i>${escape(component.name)}
                <i class="${"fas fa-chevron-down float-end me-3 mt-1 fa-sm"}"></i></span>
            <ul class="${"svelte-krdlze"}">${validate_component(MenuComponente, "svelte:self").$$render($$result, { components: component.child }, {}, {})}</ul>
        </li>`}`)}`;
});
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const componentStore = readable([
  {
    "id": 1,
    "name": "Navegador Web",
    "icon": "fab fa-chrome",
    "tags": ["Navegador", "Web"],
    "child": [
      {
        "id": 1.1,
        "name": "Abrir Navegador",
        "icon": "fab fa-chrome"
      },
      {
        "id": 1.2,
        "name": "Acessar Site/URL",
        "icon": "fas fa-globe"
      },
      {
        "id": 1.3,
        "name": "Fechar Navegador",
        "icon": "fas fa-window-close"
      },
      {
        "id": 1.4,
        "name": "Intera\xE7\xE3o",
        "icon": "fas fa-caret-right",
        "child": [
          {
            "id": 1.41,
            "name": "Clicar na P\xE1gina",
            "icon": "fas fa-mouse-pointer"
          },
          {
            "id": 1.42,
            "name": "Digitar na P\xE1gina",
            "icon": "fas fa-keyboard"
          },
          {
            "id": 1.43,
            "name": "Obter Texto da P\xE1gina",
            "icon": "fas fa-copy"
          },
          {
            "id": 1.44,
            "name": "Aguardar P\xE1gina Carregar",
            "icon": "fas fa-stopwatch-20"
          },
          {
            "id": 1.45,
            "name": "Aguardar Conte\xFAdo estar Presente",
            "icon": "fas fa-stopwatch-20"
          },
          {
            "id": 1.46,
            "name": "Aguardar Conte\xFAdo estar Vis\xEDvel",
            "icon": "fas fa-stopwatch-20"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Sistema Operacional",
    "icon": "fas fa-desktop",
    "tags": ["Sistema Operacional", "SO"],
    "child": [
      {
        "id": 2.1,
        "name": "Arquivo",
        "icon": "fas fa-file",
        "child": [
          {
            "id": 2.11,
            "name": "Se Arquivo Existe",
            "icon": "fas fa-project-diagram"
          },
          {
            "id": 2.12,
            "name": "Excluir Arquivo",
            "icon": "fas fa-trash-alt"
          },
          {
            "id": 2.13,
            "name": "Renomear Arquivo",
            "icon": "fas fa-pencil-alt"
          }
        ]
      },
      {
        "id": 2.2,
        "name": "Pasta",
        "icon": "fas fa-folder",
        "child": [
          {
            "id": 2.21,
            "name": "Criar Pasta",
            "icon": "fas fa-folder-plus"
          },
          {
            "id": 2.22,
            "name": "Excluir Pasta",
            "icon": "fas fa-folder-minus"
          },
          {
            "id": 2.23,
            "name": "Renomear Pasta",
            "icon": "fas fa-pencil-alt"
          },
          {
            "id": 2.24,
            "name": "Listar Conte\xFAdo da Pasta",
            "icon": "fas fa-list-ol"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Imagem",
    "icon": "fas fa-images",
    "tags": ["Imagem", "Imagens"],
    "child": [
      {
        "id": 3.1,
        "name": "Leitura (OCR)",
        "icon": "fas fa-print",
        "child": [
          {
            "id": 3.11,
            "name": "Obter Texto da Imagem",
            "icon": "fas fa-font"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "PDF",
    "icon": "fas fa-file-pdf",
    "tags": ["PDF", "Documento"],
    "child": [
      {
        "id": 4.1,
        "name": "Leitura",
        "icon": "fas fa-book-reader",
        "child": [
          {
            "id": 4.11,
            "name": "Obter Texto de PDF",
            "icon": "fas fa-font"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Excel/CSV",
    "icon": "fas fa-file-excel",
    "tags": ["Excel", "CSV", "Documento"],
    "child": [
      {
        "id": 5.1,
        "name": "Abrir Arquivo Excel",
        "icon": "fas fa-file-excel"
      },
      {
        "id": 5.2,
        "name": "Leitura",
        "icon": "fas fa-book-reader",
        "child": [
          {
            "id": 5.21,
            "name": "Obter Tabela do Excel",
            "icon": "fas fa-table"
          },
          {
            "id": 5.22,
            "name": "Obter Valor da C\xE9lula do Excel",
            "icon": "fas fa-table"
          },
          {
            "id": 5.23,
            "name": "Obter N\xFAmero de Linhas e Colunas do Excel",
            "icon": "fas fa-table"
          },
          {
            "id": 5.24,
            "name": "Obter Nome de Colunas do Excel",
            "icon": "fas fa-table"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "Programa\xE7\xE3o",
    "icon": "fas fa-cog",
    "tags": ["Programa\xE7\xE3o", "L\xF3gica", "Controle"],
    "child": [
      {
        "id": 6.1,
        "name": "L\xF3gica",
        "icon": "fas fa-project-diagram",
        "child": [
          {
            "id": 6.11,
            "name": "Condi\xE7\xF5es",
            "icon": "fas fa-map-signs",
            "child": [
              {
                "id": 6.111,
                "name": "Se",
                "icon": "fas fa-project-diagram"
              },
              {
                "id": 6.112,
                "name": "Sen\xE3o",
                "icon": "fas fa-project-diagram"
              },
              {
                "id": 6.113,
                "name": "Sen\xE3o Se",
                "icon": "fas fa-project-diagram"
              },
              {
                "id": 6.114,
                "name": "Fim Se",
                "icon": "fas fa-project-diagram"
              }
            ]
          },
          {
            "id": 6.12,
            "name": "Loops",
            "icon": "fas fa-sync-alt",
            "child": [
              {
                "id": 6.121,
                "name": "Enquanto",
                "icon": "fas fa-sync-alt"
              },
              {
                "id": 6.122,
                "name": "Fim Enquanto",
                "icon": "fas fa-sync-alt"
              },
              {
                "id": 6.123,
                "name": "Para Cada",
                "icon": "fas fa-retweet"
              },
              {
                "id": 6.124,
                "name": "Fim Para Cada",
                "icon": "fas fa-retweet"
              },
              {
                "id": 6.125,
                "name": "Parar Loop",
                "icon": "fas fa-pause"
              }
            ]
          }
        ]
      },
      {
        "id": 6.2,
        "name": "Tempo",
        "icon": "fas fa-clock",
        "child": [
          {
            "id": 6.21,
            "name": "Esperar Tempo",
            "icon": "fas fa-stopwatch"
          }
        ]
      },
      {
        "id": 6.3,
        "name": "Texto",
        "icon": "fas fa-font",
        "child": [
          {
            "id": 6.31,
            "name": "Localizar no Texto (Regex)",
            "icon": "fas fa-search-dollar"
          },
          {
            "id": 6.32,
            "name": "Encontrar no Texto Pr\xE9-Definidos",
            "icon": "fas fa-spell-check"
          }
        ]
      },
      {
        "id": 6.4,
        "name": "Outros",
        "icon": "fas fa-th",
        "child": [
          {
            "id": 6.41,
            "name": "Mensagem de Log",
            "icon": "fas fa-comment-alt"
          }
        ]
      }
    ]
  }
]);
var Menu_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".sidebar.svelte-yoi97w.svelte-yoi97w{min-width:280px;max-width:280px;padding-top:0.5rem;background:var(--bg-sidebar);transition:all 0.3s;position:relative;height:100%;min-height:100vh}.sidebar.active.svelte-yoi97w.svelte-yoi97w{margin-left:-280px}.sidebar.active.svelte-yoi97w .menu-componentes.svelte-yoi97w{margin-right:-45px}.sidebar.svelte-yoi97w .menu-componentes.svelte-yoi97w{display:inline-block;position:absolute;top:20px;right:0;margin-right:-20px;transition:all 0.3s}@media(max-width: 991.98px){.sidebar.svelte-yoi97w.svelte-yoi97w{margin-left:-250px}.sidebar.active.svelte-yoi97w.svelte-yoi97w{margin-left:0}.sidebar.svelte-yoi97w .menu-componentes.svelte-yoi97w{margin-right:-50px !important;top:10px !important}}@media(prefers-reduced-motion: reduce){.sidebar.svelte-yoi97w .menu-componentes.svelte-yoi97w{transition:none}}.sidebar-collapse.svelte-yoi97w.svelte-yoi97w{width:40px;height:40px;border-radius:50%;background:var(--bg-sidebar-colapse) !important;border-color:var(--color-colapse) !important;outline:none !important}.pesquisar.svelte-yoi97w.svelte-yoi97w{font-size:16px}.menu-componente.svelte-yoi97w.svelte-yoi97w{list-style-type:none;padding-left:0 !important}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuComponents = [];
  const unsubscribe = componentStore.subscribe((data) => menuComponents = data);
  onDestroy(() => {
    unsubscribe();
  });
  $$result.css.add(css$3);
  return `<nav class="${["sidebar svelte-yoi97w", ""].join(" ").trim()}"><div class="${"menu-componentes svelte-yoi97w"}"><button type="${"button"}" class="${"text-white sidebar-collapse svelte-yoi97w"}"><i class="${"fas fa-bars"}"></i>
            <span class="${"sr-only"}">Alternar menu</span></button></div>

    <div class="${"py-3 px-3"}"><a href="${"/"}"><img src="${"/img/logos/logo.png"}" class="${"img-fluid mb-3"}" alt="${"Logo Simplemation"}" draggable="${"false"}"></a>
        <input type="${"text"}" class="${"form-control mt-3 pesquisar svelte-yoi97w"}" placeholder="${"Pesquisar... "}"></div>

    <ul class="${"menu-componente svelte-yoi97w"}">${validate_component(MenuComponente, "MenuComponente").$$render($$result, { components: menuComponents }, {}, {})}</ul>
</nav>`;
});
var Console_svelte_svelte_type_style_lang = "";
var MenuFlutuante_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".menu-flutuante.svelte-1lvq42l.svelte-1lvq42l{position:fixed !important;bottom:20px;right:78px;z-index:99}.menu-flutuante-vertical.svelte-1lvq42l.svelte-1lvq42l{position:fixed;bottom:10px;right:15px;z-index:999;cursor:pointer}.menu-flutuante-icone.svelte-1lvq42l.svelte-1lvq42l{width:50px;height:50px;border-radius:100%;background:var(--bg-btn-2-hover);box-shadow:0 6px 20px rgba(0, 0, 0, 0.2)}.menu-flutuante-icone.svelte-1lvq42l.svelte-1lvq42l:hover{opacity:0.8}.menu-flutuante-icone.svelte-1lvq42l span.svelte-1lvq42l{display:flex;align-items:center;justify-content:center;height:100%;font-size:25px;color:var(--color-icon-config)}.menu-flutuante-vertical.svelte-1lvq42l>.menu-flutuante-icone-ativo.svelte-1lvq42l{width:60px;height:60px;background:var(--bg-btn-2-hover)}.menu-flutuante-opcoes.svelte-1lvq42l.svelte-1lvq42l{list-style-type:none;margin:0;position:absolute;bottom:70px;right:0;opacity:0;transition:all 0.4s ease;transform:scale(0);transform-origin:85% bottom}.menu-flutuante-icone-ativo.svelte-1lvq42l:hover+.menu-flutuante-opcoes.svelte-1lvq42l,.menu-flutuante-opcoes.svelte-1lvq42l.svelte-1lvq42l:hover{opacity:1;transform:scale(1)}.menu-flutuante-opcoes.svelte-1lvq42l li.svelte-1lvq42l{display:flex;justify-content:flex-end;padding:5px}.menu-flutuante-descricao.svelte-1lvq42l.svelte-1lvq42l{padding:2px 5px;align-self:center;user-select:none;white-space:nowrap;border-radius:3px;font-size:16px;background:var(--bg-hover-options-config);color:var(--color-hover-options-config);box-shadow:0 6px 20px rgba(0, 0, 0, 0.2);margin-right:10px;cursor:default}",
  map: null
};
const MenuFlutuante = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css$2);
  return `<div class="${"btn-group menu-flutuante text-white svelte-1lvq42l"}" role="${"group"}" aria-label="${"Menu Flutuante"}"><span class="${"btn btn-danger rounded ms-1"}" title="${"Salvar"}" aria-label="${"Salvar Script"}"><i class="${"fas fa-save"}"></i></span>

    <span class="${"btn btn-secondary rounded ms-1"}" title="${"Logs"}" aria-label="${"Logs da Execu\xE7\xE3o"}"><i class="${"fas fa-file-alt"}"></i> Logs
    </span>

    <button class="${"btn btn-success rounded ms-1 me-1"}" title="${"Executar"}" aria-label="${"Executar Script"}" ${""}><i class="${"fas fa-play-circle"}"></i> Executar
    </button>

    <div class="${"menu-flutuante-vertical svelte-1lvq42l"}"><div class="${"menu-flutuante-icone-ativo menu-flutuante-icone svelte-1lvq42l"}"><span class="${"svelte-1lvq42l"}"><i class="${"fas fa-cog"}"></i></span></div>

        <ul class="${"menu-flutuante-opcoes svelte-1lvq42l"}"><li class="${"svelte-1lvq42l"}"><span class="${"menu-flutuante-descricao svelte-1lvq42l"}">Relatar Problema</span>
                <div class="${"menu-flutuante-icone svelte-1lvq42l"}"><span class="${"svelte-1lvq42l"}"><i class="${"fas fa-bug"}"></i></span></div></li>
            <li class="${"svelte-1lvq42l"}"><span class="${"menu-flutuante-descricao svelte-1lvq42l"}">Documenta\xE7\xE3o</span>
                <div class="${"menu-flutuante-icone svelte-1lvq42l"}"><span class="${"svelte-1lvq42l"}"><i class="${"fas fa-file-alt"}"></i></span></div></li>
            <li class="${"svelte-1lvq42l"}"><span class="${"menu-flutuante-descricao svelte-1lvq42l"}">Alterar Idioma</span>
                <div class="${"menu-flutuante-icone svelte-1lvq42l"}"><span class="${"svelte-1lvq42l"}"><i class="${"fas fa-language"}"></i></span></div></li>
            <li class="${"svelte-1lvq42l"}"><span class="${"menu-flutuante-descricao svelte-1lvq42l"}">Mudar Tema</span>
                <div class="${"menu-flutuante-icone svelte-1lvq42l"}"><span class="${"svelte-1lvq42l"}"><i class="${"fas fa-adjust"}"></i></span></div></li></ul></div></div>

${``}`;
});
var ScriptArea_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".input-nome.svelte-118lpyb,.input-nome.svelte-118lpyb:hover,.input-nome.svelte-118lpyb:focus{background:transparent !important;border:none !important;box-shadow:none !important;outline:none !important;color:var(--color-input-script-name) !important;font-size:2rem !important;font-weight:500 !important}.input-nome.svelte-118lpyb::-webkit-input-placeholder{color:var(--bg-container-hr) !important;opacity:1 !important}.input-nome.svelte-118lpyb:-ms-input-placeholder{color:var(--bg-container-hr) !important;opacity:1 !important}.input-nome.svelte-118lpyb::-ms-input-placeholder{color:var(--bg-container-hr) !important;opacity:1 !important}.input-nome.svelte-118lpyb::placeholder{color:var(--bg-container-hr) !important;opacity:1 !important}.hr-nome-script.svelte-118lpyb{height:5px !important;background-color:var(--bg-container-hr) !important;opacity:0.9 !important}",
  map: null
};
const ScriptArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { script_name = "" } = $$props;
  if ($$props.script_name === void 0 && $$bindings.script_name && script_name !== void 0)
    $$bindings.script_name(script_name);
  $$result.css.add(css$1);
  return `<div class="${"container-fluid my-5 ms-5 me-1"}"><div class="${"row"}"><div class="${"col"}"><div class="${"form-group me-5 ms-3 mb-4"}"><input type="${"text"}" class="${"form-control input-nome svelte-118lpyb"}" placeholder="${"Nome do Projeto"}"${add_attribute("value", script_name, 0)}></div>
            <hr class="${"ms-4 me-5 hr-nome-script svelte-118lpyb"}"></div></div>
    <div class="${"row"}"><div class="${"col ms-4 me-3"}"></div></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-studio.svelte-1a9otln{background-color:var(--bg-container-script)}",
  map: null
};
const Studio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container-studio wrapper d-flex svelte-1a9otln"}">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
    ${validate_component(MenuFlutuante, "MenuFlutuante").$$render($$result, {}, {}, {})}
    ${validate_component(ScriptArea, "ScriptArea").$$render($$result, {}, {}, {})}
</div>`;
});
export { Studio as default };
