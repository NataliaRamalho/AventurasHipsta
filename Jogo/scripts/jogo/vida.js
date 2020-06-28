class Vida {
  constructor(total, inicial) {
    this.total = total
    this.inicial = inicial

    this.vidas = this.inicial
    this.xInicial = 20
    this.y = 20
    this.distancia = 0
  }
  
  draw() {
    for(let i = 0; i < this.vidas; i++){
      const margem = i* 10;
      const posicao = this.xInicial * (i + 1)
      image(imagemVida,  posicao + margem, this.y, 25, 25)
    }
  }
  
  ganhaVida(){
    if(this.vidas <= this.total) {
      this.vidas++
    }
  }
  
  perdeVida(){
    this.vidas--;
  }
  resetVidas(){
    this.vidas = this.inicial;
  }
}