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
}