//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById('nomes');
    let nome = input.value.trim();

    if (nome === "") {
        alert(" Antes de continuar digite um nome!");
        return;
    }

    if (nomesAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado, digite outro!");
        return;
    }

    nomesAmigos.push(nome);
    atualizarLista();
    input.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 
    
    nomesAmigos.forEach(nomes => {
        let li = document.createElement('li');
        li.textContent = nomes;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomesAmigos.length === 0) {
        alert("Não há nenhum nome na lista, digite um nome para continuar.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomesAmigos.length);
    let nomeSorteado = nomesAmigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}