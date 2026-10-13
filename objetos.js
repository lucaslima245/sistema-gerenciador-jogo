const PromptSync = require("prompt-sync");

const prompt = require("prompt-sync") ();

console.log("teste de objetos")

let item = []


let nomedoitem = prompt("qual nome do item? ");
let numerodoitem = prompt("qual e o numero? ");

    let produto1 = {
        nome: nomedoitem,
        codigo: numerodoitem,
    }
    
    item.push(produto1);

    console.log("item: " +nomedoitem+ " numero: " +numerodoitem)



