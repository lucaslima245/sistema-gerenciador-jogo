const prompt = require("prompt-sync")();

console.log("-----------------------------------------------------")

let opcaoescolhida = (prompt("QUAL NUMERO VOCE QUER DE 1 A 3?"));

switch (opcaoescolhida) {
    case "1":
        console.log ("voce escolheu o numero um");
    break;

    case "2":
        console.log ("voce escolheu o numero dois");
    break;

    case "3":
        console.log ("voce escolheu o numero tres");
    break;
        
    default:b
    console.log("opcao invalida")
    break;
}