import { readable } from 'svelte/store';

export const componentStore = readable([
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
                "name": "Interação",
                "icon": "fas fa-caret-right",
                "child": [
                    {
                        "id": 1.41,
                        "name": "Clicar na Página",
                        "icon": "fas fa-mouse-pointer"
                    },
                    {
                        "id": 1.42,
                        "name": "Digitar na Página",
                        "icon": "fas fa-keyboard"
                    },
                    {
                        "id": 1.43,
                        "name": "Obter Texto da Página",
                        "icon": "fas fa-copy"
                    },
                    {
                        "id": 1.44,
                        "name": "Aguardar Página Carregar",
                        "icon": "fas fa-stopwatch-20"
                    },
                    {
                        "id": 1.45,
                        "name": "Aguardar Conteúdo estar Presente",
                        "icon": "fas fa-stopwatch-20"
                    },
                    {
                        "id": 1.46,
                        "name": "Aguardar Conteúdo estar Visível",
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
                        "name": "Listar Conteúdo da Pasta",
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
                        "name": "Obter Valor da Célula do Excel",
                        "icon": "fas fa-table"
                    },
                    {
                        "id": 5.23,
                        "name": "Obter Número de Linhas e Colunas do Excel",
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
        "name": "Programação",
        "icon": "fas fa-cog",
        "tags": ["Programação", "Lógica", "Controle"],
        "child": [
            {
                "id": 6.1,
                "name": "Lógica",
                "icon": "fas fa-project-diagram",
                "child": [
                    {
                        "id": 6.11,
                        "name": "Condições",
                        "icon": "fas fa-map-signs",
                        "child": [
                            {
                                "id": 6.111,
                                "name": "Se",
                                "icon": "fas fa-project-diagram"
                            },
                            {
                                "id": 6.112,
                                "name": "Senão",
                                "icon": "fas fa-project-diagram"
                            },
                            {
                                "id": 6.113,
                                "name": "Senão Se",
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
                        "name": "Encontrar no Texto Pré-Definidos",
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