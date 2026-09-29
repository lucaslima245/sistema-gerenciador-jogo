const prompt = require("prompt-sync") ();

let time = [];

let continuar = true;
 
while(continuar=== true) {
    let nomeusuario = prompt("digite o nome do usuario ('ou sair')")
    
    if(nomeusuario==='sair') {
        continuar= false;
    } else {
        time.push(nomeusuario);
        console.log("usuario "+nomeusuario+" foi cadastrado com sucesso")
        console.log("o seu time e:", time);
    }
}