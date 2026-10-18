const prompt= require("prompt-sync") ();

let produtos = []
let continuar = true;

function mostraopcao () {
    console.log("---------sistema de mercado------------")
    console.log("qual opcao deseja escolher?")
    console.log("1 - cadastrar produto")
    console.log("2 - mostrar estoque")
    console.log("3- remover do estoque")
    console.log("4 - excluir produto")
    console.log("5 - sair ")
    console
}

function cadastrarproduto () {
    let nomeproduto = prompt("qual produto deseja cadastrar?")
    let codigodoproduto = prompt("qual o codigo de barras?")
    let quantidadeprodutos = Number(prompt("qual a quantidade de produto?"))

    let item = {
        nome: nomeproduto,
        codigo: codigodoproduto,
        quantidade: quantidadeprodutos,
    }  

    produtos.push(item)

    console.log("o produto "+nomeproduto+" foi cadastrado.")
}
   
    


function mostrarproduto(){
    if (produtos.length === 0){
        return;
    }    

    for (let i = 0; i > produtos.length; i++){
        let mercadoria = produtos[i];
        console.log((i + 1))+ ". "+mercadoria.nomeproduto +" |codigo: "+mercadoria.codigo+ " | estoque: "+mercadoria.quantidade
    }
}

function excluirproduto (){
    if(produtos === 0) {
        return;
    } else {
        produtoretirado = prompt("qual produto deseja fazer a retira?")
        quantidaderetirado = Number(prompt("Quanto voce quer remover do estoque?"))

        for(i = 0; i < produtos.length; i++) {
            if (produtos[i].nome === produtoretirado) {
                quantidade = quantidade - quantidaderetirado
            }
        }
    }
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