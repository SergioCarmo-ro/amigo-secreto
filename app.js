//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do input de nome
    let nomeAmigo = document.getElementById('amigo').value.trim();

    // Verifica se o nome não está vazio e não está duplicado
    if (nomeAmigo && !listaDeAmigos.includes(nomeAmigo)) {
        // Adiciona o nome à lista
        listaDeAmigos.push(nomeAmigo);

        // Atualiza a lista na tela
        atualizarListaAmigos();

        // Limpa o campo de input
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, insira um nome válido e único.');
    }
}

// Função para exibir a lista de amigos
function atualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // Limpa a lista antes de atualizar

    // Cria uma lista de itens com os amigos
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('É necessário ter pelo menos 2 amigos na lista para realizar o sorteio.');
        return;
    }

    // Sorteia um amigo aleatório da lista
    let amigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    // Exibe o resultado na tela
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O seu amigo secreto é: <strong>${amigoSecreto}</strong>`;

    // Adiciona a animação de sorteio (opcional)
    setTimeout(() => {
        resultadoElement.classList.add('reveal');
    }, 100);
}
 // Reiniciar o jogo após exibir o resultado
 setTimeout(() => {
    listaDeAmigos = []; // Esvazia a lista
    atualizarListaAmigos(); // Atualiza a interface
    resultadoElement.innerHTML = ''; // Limpa o resultado
    resultadoElement.classList.remove('reveal'); // Remove a animação
}, 2000); // Aguarda 3 segundos antes de limpar tudo

