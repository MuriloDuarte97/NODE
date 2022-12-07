/**
 * Sistema de Doação Criança Esperança
 */

//importar o pacote
const read = require('readline-sync')

let doacao = ["0", "1",  "2", "3", "4",]

console.log("0 = para doar 10 reais")
console.log("1 = para doar 25 reais")
console.log("2 = para doar 50 reais")
console.log("3 = para outros valores")
console.log("4 = para cancelar")

let valor = read.question("Digite o numero ")

if (valor == doacao [0]) {
    console.log("Foi feita a doacao de 10 Reais, Obrigado")
}

else if (valor == doacao [1]) {
    console.log("Foi feita a doacao de 25 Reais, Obrigado")
}

else if (valor == doacao [2]) {
    console.log("Foi feita a doacao de 50 Reais, Obrigado")
}

else if (valor == doacao [3]) {
    let outrovalor = read.question("Qual valor voce deseja doar?")
    console.log(`Foi feita a doacao de ${outrovalor} Reais, Obrigado`)

}
else{
    console.log("Doação Cancelada")
}