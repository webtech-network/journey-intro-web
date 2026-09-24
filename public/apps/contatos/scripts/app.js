// Desenvolvimento de Interfaces Web - DIW
// Módulo de CRUD de Contatos via JSON Server
//
// Este módulo realiza as operações de CRUD (Create, Read, Update, Delete)
// a partir de uma API REST baseada no JSON Server.
//
// Autor: Rommel Vieira Carneiro
// Atualizado para usar a rota /api do projeto

// URL base da API JSON Server (rota /api configurada no index.js)
const apiUrl = '/api/contatos';

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

// READ - Lê todos os contatos e chama a função de callback com os dados
function readContato(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler contatos via API JSONServer:', error);
            displayMessage("Erro ao ler contatos. Verifique se o servidor está rodando.");
        });
}

// CREATE - Cria um novo contato via POST
function createContato(contato, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contato),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato inserido com sucesso");
            if (refreshFunction) refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir contato via API JSONServer:', error);
            displayMessage("Erro ao inserir contato");
        });
}

// UPDATE - Atualiza um contato existente via PUT
function updateContato(id, contato, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contato),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato alterado com sucesso");
            if (refreshFunction) refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar contato via API JSONServer:', error);
            displayMessage("Erro ao atualizar contato");
        });
}

// DELETE - Remove um contato via DELETE
function deleteContato(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato removido com sucesso");
            if (refreshFunction) refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover contato via API JSONServer:', error);
            displayMessage("Erro ao remover contato");
        });
}
