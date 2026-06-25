const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {

    const titulo = document.querySelector("h1");

    if (titulo.innerText === "João Vitor Tavares de Souza") {
        titulo.innerText = "Construindo minha carreira em tecnologia";
        botao.innerText = "Voltar";
    } else {
        titulo.innerText = "João Vitor Tavares de Souza";
        botao.innerText = "Clique aqui";
    }

});