/**
 * jogo: pedra - papel - tesoura
 */

//importar o pacote 
const read = require('readline-sync')
console.log("_______jokenpo_______")
console.log("1.pedra")
console.log("2.papel")
console.log("3.tesoura")
console.log("")

//logica do jogador
let jogador = Number(read.question("digite a opcao desejada: "))

switch (jogador) {
    case 1:
        console.log("voce escolheu pedra")
        break
    case 2:
        console.log("voce escolheu papel")
        break
    case 3:
        console.log("voce escolheu tesoura")
        break
    default:
       console.log("opcao invalida")
        break
}

//logica do micro
let micro = Math.floor(Math.random() * 3 + 1)
switch (micro) { 
    case 1:
        console.log("adversario escolheu pedra")
        break
    case 2:
        console.log("adversario escolheu papel")
        break
    case 3:
        console.log("adversario escolheu tesoura")
        break
}

console.log("")
//logica para declarar o vencedor ou empate
if (jogador == micro) {
    console.log("EMPATE")
} else if ((jogador == 1 && micro == 3) || (jogador == 2 && micro == 1) || (jogador == 3 && micro == 2)){
    console.log("jogador VENCEU")
} else {
    console.log("coputador VENCEU")
}
