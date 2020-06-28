class Pontuacao {
  constructor() {
    this.pontos = 0
    this.bonus = false;
  }
  
  exibe(cor = '#fff') {
    textAlign(RIGHT)
    fill(cor)
    textSize(50)
    text(parseInt(this.pontos), width - 30, 50)
  }
  adicionarPonto() {
    this.pontos = this.pontos + 0.2
  }
  getPontos(){
    return this.pontos
  }
  
  pontuacaoTotal(){
    return this.pontos;
  }
  resetPontuacao(){
    this.pontos = 0;
  }
  
  bonusPontos(){
    this.bonus = true;
    this.pontos += 50;
    this.exibe('black')
    setTimeout(() => {
       this.exibe();
       this.bonus = false}, 800)
  }
  getBonus(){
    return this.bonus
  }
}