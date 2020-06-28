class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, bonus) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.velocidade = velocidade
    this.x = width;
    this.bonus = bonus;
  }
  
  move() {
    this.x = this.x - this.velocidade
  }
  aparece(){
    this.x = width;
  }
  
  alteraVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade
  }
  inimigoEspecial(){
    return this.bonus;
  }
  resetInimigo(){
    this.velocidade = 20;
    this.x = width;
  }
}