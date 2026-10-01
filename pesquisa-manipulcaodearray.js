const prompt = require("prompt-sync") ();

let time = ["lucas", "paulo", "joao", "pedro"]
let deletee = prompt("digite o nome que voce quer deletar"); // digita o dado que voce quer remover

    let index = time.indexOf(deletee) // seleciona 
    time.splice(index, 1) //deleta o item que voce quer

    console.log("o seu time e", time);