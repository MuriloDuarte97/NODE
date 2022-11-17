/**
 * DESCONTO
 */

const readline = require('readline-sync')

let valorInicial = readline.question('qual o valor inicial do produto?: ')
let Desconto = readline.question('qual a porcentagem de desconto?: ')

let valorDoDesconto =  ((Desconto / 100) * valorInicial)
let totalAPagar = (valorInicial - valorDoDesconto)
console.log(`esse e o total a pagar pelo produto: ${totalAPagar}`)