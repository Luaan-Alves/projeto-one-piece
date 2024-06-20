const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("mouseenter", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagensSelecionados = document.querySelectorAll(".personagem.selecionado");
    personagensSelecionados.forEach(personagemSelecionado => {
        personagemSelecionado.classList.remove("selecionado");
    });
}

function desselecionarBotao() {
    const botoesSelecionados = document.querySelectorAll(".botao.selecionado");
    botoesSelecionados.forEach(botaoSelecionado => {
        botaoSelecionado.classList.remove("selecionado");
    });
}

