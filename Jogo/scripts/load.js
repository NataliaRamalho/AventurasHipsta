function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemCenarioPretoBranco = loadImage('imagens/cenario/florestaPretoBranco.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemPretoBranco = loadImage('imagens/personagem/pretobranco.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemGotaOuro2 = loadImage('imagens/inimigos/gotaOuro2.png');

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somBatida = loadSound('sons/somBatida.mp3');
  somBonus = loadSound('sons/bonus.mp3');
}