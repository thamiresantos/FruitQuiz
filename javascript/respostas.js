function mostrarFruta(nomeFruta) {
    const img = document.createElement("img");
    img.src = `estilos/imagens/frutas/${nomeFruta}.png`;
    img.classList.add("fruta-feedback");

    document.body.appendChild(img);

    // remove depois da animação
    setTimeout(() => {
        img.remove();
    }, 900);
}


function verificarResposta (botao, respostaCorreta) {
if (botao.textContent === respostaCorreta){
    botao.classList.add('correta');

    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Resposta Correta!';
    mensagem.classList.remove('erro');
    mensagem.classList.add('acerto');

    //feedback visual da fruta
   const fruta = document.getElementById("div-opcoes").dataset.fruta;
    mostrarFruta(fruta);
    
    setTimeout(function(){
        proximaPagina();
    }, 970);

} else {
        botao.classList.add('incorreta');
        document.getElementById('mensagem').textContent = 'Resposta incorreta. Tente Novamente!';
        document.getElementById('mensagem').classList.add('erro');
    }

}

// Redirecionar para a próxima página
function proximaPagina(){
    const proximaPagina = document.getElementById('div-opcoes').dataset.proximaPagina;
    window.location.href = proximaPagina; 
}