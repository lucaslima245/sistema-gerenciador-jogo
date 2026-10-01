const prompt = require("prompt-sync") ();

let time = [];

let continuar = true;
 
function mostraropcoes () {
    console.log("1 - cadastrar");
    console.log("2 - deletar");
    console.log("3 - mostrar equipe");
    console.log("4 - sair");
    console.log("\n");

}

function mostrarequipe() {
    console.log("-------------------------------------");
    console.log("sua equipe atual e", time);
    console.log("-------------------------------------");
}

function cadastrarjogador() {
    let nomejogador = prompt("digite o nome do jogador: ");
    
        time.push(nomejogador);
        console.log("jogador "+nomejogador+" foi cadastrado com sucesso");
        console.log("-------------------------------------");

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