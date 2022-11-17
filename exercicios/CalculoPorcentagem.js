//Caulo %

let readline = require(`readline-sync`)

let porcentagem = readline.question("Digite a porcentagem: ").replace(",",".")
let valor = readline.question("Qual o valor que voce deseja calcular a porcentagem ?: ")

console.log(typeof(porcentagem))
console.log(typeof(valor))

let resultado = ((porcentagem / 100) * valor)

console.log(`esse e o seu resultado: ${resultado}`)