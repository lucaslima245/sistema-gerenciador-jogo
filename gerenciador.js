const pontuacao = require ('prompt-sync')();
let nome = nomejogador("digite o nome do jogador");
let ponto = Number(pontuacao("digite sua pontucao"));

const pontominimo= 1000;

if (ponto >= pontominimo ) {
    console.log("parabens" +nome+"voce conseguiu passar com " +ponto+" pontos");
}

