/**
 * Imposto
 */

let read = require('readline-sync')

let ValorTotalDeProdutos = Number(read.question("Qual o valor total dos produtos comprados?: "))

let imposto = ValorTotalDeProdutos * 0.30

console.log(`voce precisa pagar de impostos um valor de: ${imposto}`) 
