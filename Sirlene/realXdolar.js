/**
 * Trabalho Sirlene
 */

let read = require('readline-sync')

let Real = Number(read.question("Qual o valor em Real que voce deseja converter para Dolar?: "))
let dolar = 5.36
let receberEmReal = Real * dolar

console.log(`voce vai receber em real um valor de: ${receberEmReal}`)
