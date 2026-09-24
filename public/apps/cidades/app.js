// Desenvolvimento de Interfaces Web - DIW
// Módulo de carregamento de cidades via JSON Server
// Demonstra passagem de parâmetros entre páginas via URL (query string)
//
// Autor: Rommel Vieira Carneiro

const urlCidades = '/api/cidades';  // rota /api configurada no index.js
let cidades = [];

// Carrega os dados do JSON Server e chama a função de callback
function carregaDadosJSONServer(func) {
    fetch(urlCidades)
        .then(response => response.json())
        .then(dados => {
            cidades = dados;
            console.log('Cidades carregadas:', cidades);
            func();
        })
        .catch(err => {
            console.error('Erro ao carregar cidades:', err);
            document.body.innerHTML +=
                `<div style="color:red;padding:1rem">
                    ❌ Erro ao conectar ao JSON Server.
                    Verifique se o servidor está rodando em <code>localhost:5000</code>.
                </div>`;
        });
}
