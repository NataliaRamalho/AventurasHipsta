class GameOver {
  constructor() {
    this.x = width / 2;
    this.y = height
  }
  draw(pontuacao) {
    this._fundo()
    this._botao()
    this._texto();
  }
  _fundo() {
      image(imagemCenarioPretoBranco, 0, 0, width, height)
      image(imagemGameOver, width / 2 - 200, height/8 *2 )
  }

  _texto(){
    fill(0);
    strokeWeight(2);
    textAlign(CENTER);
    textSize(40);
    let texto = 'Sua pontuacao foi de: ' + pontuacaoFinal;
    fill('WHITE');
    text(texto, width / 2, height / 4 *2.5);
  }
  _botao() {
    botaoNovoJogo.y = height / 7 * 5
    botaoNovoJogo.draw()
  }
  resetJogo(vida, somDoJogo,pontuacao,personagem,inimigo){
    vida.resetVidas();
    somDoJogo.stop();
    pontuacao.resetPontuacao();
    personagem.resetPersonagem();
    inimigo.resetInimigo();
  }
}