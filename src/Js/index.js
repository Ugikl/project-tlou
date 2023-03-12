/* 
  OBJETIVO - quando clicar no botão mostrar a imagem de fundo correspondente

  passo 1 - dar um jeito de pegar o elemento html dos botões

  passo 2 - dar um jeito de identificar o clique do usuário no botão
  
  passo 3 - desmarcar o botão selecionado anterior
  
  passo 4 - marcar o botão clicado como se estivesse selecionado
  
  passo 5 - esconder a imagem anterior
  
  passo 6 - fazer aparecer a imagem correspondente ao botão clicado

  */

  //passo 1 - dar um jeito de pegar o elemento html dos botões
  const botoesCarrossel=document.querySelectorAll('.botao');
  const imagens=document.querySelectorAll('.imagem');

  //passo 2 - dar um jeito de identificar o clique do usuário no botão
  botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoselecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
        
    } )
  } )

function mostrarImagemDeFundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    console.log(botaoSelecionado.classList.remove('selecionado'));
}
