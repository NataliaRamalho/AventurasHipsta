class DificuldadeJogo{
  construct() {
  }

  mapa(velocidadeInimigo) {
    return [
      {
        inimigo: 0,
        velocidade: velocidadeInimigo
      },
      {
        inimigo: 2,
        velocidade: velocidadeInimigo
      },

      {
        inimigo: 1,
        velocidade: velocidadeInimigo
      },

      {
        inimigo: 3,
        velocidade: velocidadeInimigo +15
      },
      
      {
        inimigo: 1,
        velocidade: velocidadeInimigo
      },
      
      {
        inimigo: 0,
        velocidade: velocidadeInimigo
      },
      
       {
        inimigo: 1,
        velocidade: velocidadeInimigo
      },
      
       {
        inimigo: 0,
        velocidade: velocidadeInimigo
      },
      
       {
        inimigo: 2,
        velocidade: velocidadeInimigo
      },
    ]
  }
  
  getMapa(pontos){
    if(pontos<150){
      return this.mapa(20);
    }
    else if(pontos< 300){
      return this.mapa(30)
    }
    else if(pontos <500){
      return this.mapa(40);
    }
    else if(pontos <600){
      return this.mapa(50);
    }
    else if(pontos <800){
      return this.mapa(65);
    }
    else if(pontos <1500){
      return this.mapa(70)
    }
    else{
      return this.mapa(100)
    }
  }
 
}