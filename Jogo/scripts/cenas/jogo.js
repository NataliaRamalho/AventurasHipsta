class Jogo {
  constructor() {
    this.proximoEstado = 'gameOver';
    this.indice = 0;
  }

  setup() {
    dificuldadeJogo = new DificuldadeJogo();

    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, false);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, false);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, false);
    const gotaOuro2 = new Inimigo(matrizInimigoVoador, imagemGotaOuro2, width - 52, 200, 100, 75, 200, 150, 10, true);

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
    inimigos.push(gotaOuro2)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw()
    !pontuacao.getBonus() ? pontuacao.exibe() : pontuacao.exibe('BLACK');
    pontuacao.adicionarPonto()
    !personagem.getInvencivel() ? personagem.exibe() : personagem.exibe(imagemPretoBranco);
    personagem.aplicaGravidade();
    
    const mapa = dificuldadeJogo.getMapa(pontuacao.getPontos());
    const linhaAtual = mapa[this.indice]
    let inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;


    inimigo.velocidade = linhaAtual.velocidade;
    this.velocidade = linhaAtual.velocidade;
    inimigo.exibe()
    inimigo.move()

    if (inimigoVisivel) {
      this.indice++
      inimigo.aparece();
      if (this.indice > mapa.length - 1) {
        this.indice = 0
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      if (inimigo.inimigoEspecial()) {
        pontuacao.bonusPontos();
        somBonus.play();
      } else {
        vida.perdeVida()
        personagem.tornarInvencivel();
    
        if (vida.vidas === 0) {
          pontuacaoFinal = parseInt(pontuacao.pontuacaoTotal());
          botaoNovoJogo = new BotaoGerenciador('Jogar Novamente', width / 2, height / 2 * 2.5)
          gameOver.resetJogo(vida, somDoJogo, pontuacao, personagem,inimigo)
          this.indice = 0;
          cenaAtual = this.proximoEstado;
        }
      }
    }
  }
}