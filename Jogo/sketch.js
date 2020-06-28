function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  jogo = new Jogo();
  gameOver = new GameOver();
  cenas = {
    telaInicial,
    jogo, 
    gameOver
  }
  jogo.setup()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)
  vida = new Vida(3, 3)
  frameRate(40)
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
    cenas[cenaAtual].draw();
}