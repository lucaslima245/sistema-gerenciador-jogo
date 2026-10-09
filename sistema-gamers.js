const prompt = require("prompt-sync") ();

let time = [];

let continuar = true;
 
function mostraropcoes () {
    console.log("---------- SISTEMA DE GAMES-----------");
    console.log("1 - cadastrar");
    console.log("2 - deletar");
    console.log("3 - mostrar equipe");
    console.log("4 - calculo da media da equipe");
    console.log("5 - buscar jogador")
    console.log("6 - sair")
    console.log("\n");

}


function mostrarequipe() {
    if (time.length === 0) {
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | funcao: " +jogador.funcao + " | pontuacao: " +jogador.pontuacao)
        console.log("\n")

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
        let indexdeletado = -1;

        for (let i = 0; i < time.length; i++) {
            if (time[i].nome === nomedeletado) {
                indexdeletado = i;
                break;
            }
        }

        if (indexdeletado === -1) {
            console.log("o jogador nao foi encontrado")
            return;
        }

        time.splice(time, 1);
        console.log("jogador deletado com sucesso");
}
 
function calculodamedia(){
    if (time.length === 0) {
        console.log("nenhum jogador foi cadastrado")
        return;
    }
    let totalpontos = 0;
    for (let i = 0; i < time.length; i++){
        totalpontos = totalpontos + time[i].pontuacao
    }
    let mediapontos = totalpontos / time.length;

    console.log("o time possui uma pontuacao media de:", mediapontos)

}

function buscarjogador(){
    if (time.length === 0) {
        console.log("nenhum jogador foi cadastrado");
        return;
    }

    let nomedesejado = prompt("qual jogador deseja procurar na lista")
    let encontrou = false;
    
    
    for (let i = 0; i < time.length; i++) {
        let jogadoratual = time[i]; 

        if (jogadoratual.nome === nomedesejado) { 

        console.log("JOGADOR ENCONTRADO!");
        console.log("Nome: " + jogadoratual.nome + " | Pontos: " + jogadoratual.pontuacao);
        encontrou = true;
        
        break;
        }
    }
  
        if (!encontrou) { 

        console.log("O jogador " + nomedesejado + " não faz parte da nossa equipe."); 

    }
}

while(continuar === true) {  
    mostraropcoes();
    let opcao = (prompt("digite sua opcao: "))
    
    if(opcao === "1"){
        cadastrarjogador();    
    
    } else if(opcao=== "2") {
        deletarjogador();     

    } else if(opcao === "3"){
        mostrarequipe();
    }
    
    else if(opcao === "4"){
        calculodamedia();
    }
    
    else if (opcao === "5") {
        buscarjogador();
    } 
    else if (opcao ==="6") {
        continuar = false;
    } 
     
    else {
        console.log("opcao invalida, digite outra opcao...") 

    }

}

