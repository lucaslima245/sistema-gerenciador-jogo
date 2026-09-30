const prompt = require("prompt-sync") ();

let time = [];

let continuar = true;
 
while(continuar === true) {
    
    let opcao = prompt("digite sua opcao: 1 (cadastra),2 (deletar) ou 3 (sair): ")

    if(opcao === 1){

    let nomejogador = prompt("digite o nome do jogador: ")
    
        time.push(nomejogador);
        console.log("jogador "+nomejogador+" foi cadastrado com sucesso")
        console.log("o seu time e:", time);
        console.log("--------------------------------------")
    } else if(opcao===2){

    } else if(opcao===3){
        continuar = false;
    } else {
        console.log("opcao invalida, digite outra opcao...") 

    }



}