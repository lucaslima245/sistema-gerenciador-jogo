const prompt = require ('prompt-sync')();
let nome= prompt("digite seu nome:");
let ponto = Number(prompt("digite sua pontucao:"));

const pontominimo= 1000;

if (isNaN(ponto)) { 

console.log("ERRO GRAVE: Você não digitou um número válido. Cadastro cancelado."); 

} else{
if (ponto >= pontominimo ) {
    console.log("parabens "+nome+" voce conseguiu passar com " +ponto+" pontos");
}   else {
    let pontosfaltant = pontominimo - ponto
    console.log("o jogador " +nome+ " estar reprovado faltam " +pontosfaltant+" pontos");
}
}
