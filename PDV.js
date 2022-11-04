/**
 * PDV
 */

let readline = require(`readline-sync`)

let totalDaCompra = readline.question("Quanto ficou sua compra em nossa loja meu parceiro ?:")
let desconto = readline.question("Qual a porcentagem de desconto que vc viu em nosso instagram ?: ")

let valorDoDesconto = ((desconto / 100) * totalDaCompra)
console.log(`voce vai ter um desconto de: ${valorDoDesconto}`)

let totalApagar = (totalDaCompra - valorDoDesconto)
console.log(`sua compra vai ficar no valor de: ${totalApagar}`)

let ValorPago = readline.question("Quanto voce tem na mao ai para pagar a conta amigao ?: ")

let troco = (ValorPago - totalApagar)
console.log(`Boa mano, segura seu troco ai: ${troco} `)
