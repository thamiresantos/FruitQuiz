// Função para saber o nome do usuario na primeira pagina
function validarNome(){
    let nome = document.getElementById('nome').value;
   // let usuario = userNome.ariaValueMax.trim()
    
    let mensagem = document.getElementById("mensagem")
    if (nome === "") {
        //mensagem.textContent = "Insira como gostaria de ser chamado para continuar"
     alert ('Para continuar, insira como gostaria de ser chamado!!')
   
    } else {
        localStorage.setItem('nomeUsuario', nome); // Armazendo o nome do usuario
        window.location.href = 'pergunta01.html'
    }
}


