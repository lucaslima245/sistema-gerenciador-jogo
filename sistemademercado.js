const prompt= require("prompt-sync") ();

let produtos = []
let continuar = true;

function mostraopcao () {
    console.log("---------sistema de mercado------------")
    console.log("qual opcao deseja escolher?")
    console.log("1 - cadastrar produto")
    console.log("2 - mostrar estoque")
    console.log("3 - excluir produto")
    console.log("4 - sair ")
    console
}

function cadastrarproduto () {
    let nomeproduto = prompt("qual produto deseja cadastrar?")
    let codigodoproduto = prompt("qual o codigo de barras?")
    let quantidadeprodutos = prompt("qual a quantidade de produto?")

    let b   


}

function mostrarproduto(){

}

function excluirproduto (){

}

while (continuar === true) {
    mostraopcao();
    let opcao = (prompt("digite sua opcao: "))

    if (opcao === "1"){
        cadastrarproduto();
    
    } else if (opcao === "2") {
        mostrarproduto();
    
    } else if (opcao === "3") {
        excluirproduto();
    
    } else if (opcao === "4") {
        continuar = false;
    }
}