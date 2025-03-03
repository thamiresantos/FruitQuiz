function verificarResposta (botao, respostaCorreta) {
    if (botao.textContent === respostaCorreta){
        botao.classList.add('correta');
        document.getElementById('mensagem').textContent = 'Resposta Correta!';
        document.getElementById('mensagem').classList.add('acerto');

// Redireciona para a próxima página após um breve atraso
setTimeout(function(){
    proximaPagina();
}, 1500); // Aguarda 1.5 segundos (1500 milissegundos)
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