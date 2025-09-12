//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    let apenasNomes = /^[A-Za-záéíóúãõâêîôûàèìòù\s]+$/;

    if (!apenasNomes.test(nome)) {
        alert("Por favor, insira um nome válido (apenas letras)!");
        return;
    }

    amigos.push(nome);
    document.getElementById('amigo').value = "";

    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}
