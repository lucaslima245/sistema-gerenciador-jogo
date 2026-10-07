const prompt = require("prompt-sync") ();

let time = [];

let continuar = true;
 
function mostraropcoes () {
    console.log("---------- SISTEMA DE GAMES-----------");
    console.log("1 - cadastrar");
    console.log("2 - deletar");
    console.log("3 - mostrar equipe");
    console.log("4 - calculo da media da equipe");
    console.log("5 - sair")
    console.log("\n");

}


function mostrarequipe() {
    if (time.length === 0) {
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | funcao: " +jogador.funcao + " | pontuacao: " +jogador.pontuacao)
    }
}


function cadastrarjogador() {
    let nomejogador = prompt("digite o nome do jogador: ");
    let funcaojogador = prompt("digite a funcao no time:  ");
    let pontuacaojogador = Number(prompt("digite a pontuacao: "));
    
    if (isNaN(pontuacaojogador)) {
        console.log("pontuacao invalida")
        return;
    } else {
        let recruta = {
            nome: nomejogador,
            funcao: funcaojogador,
            pontuacao: pontuacaojogador,         
        }
        
        
        time.push(recruta);
        console.log("jogador "+nomejogador+" foi cadastrado com sucesso");
        console.log("---------------------------------------");
    }

}


function deletarjogador() {
        if (time.length === 0) {
            console.log("jogador nao cadastrado")
            return;
        }
        let nomedeletado = prompt("digite o nome a ser deletado");
        let index = time.indexOf(nomedeletado);

        if (index === -1) {
            console.log("o jogador nao foi encontrado")
            return;
        }
        time.splice(index, 1);
        console.log("jogador deletado com sucesso");
        console.log("---------------------");
}
 

while(continuar === true) {  
    mostraropcoes();
    let opcao = Number(prompt("digite sua opcao: "))
    
    if(opcao === 1){
        cadastrarjogador();    
    
    } else if(opcao=== 2) {
        deletarjogador();     

    } else if(opcao === 3){
        mostrarequipe();
    }
    
    else if(opcao === 4){
        continuar = false;
    
    } else {
        console.log("opcao invalida, digite outra opcao...") 

    }



}