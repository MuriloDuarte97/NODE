/**
 * Estudo da variavel booleano 
 */

 let sw = false
 let lamp = true
 console.log(typeof(sw))
 console.log(sw)
 console.log(typeof(lamp))
 console.log(lamp)
 //No JS é possivel usar 0 ou 1 como booleano 
 
 sw = !1
 console.log(typeof(sw))
 console.log(sw)

 //é possivel usar o tipo booleano como uma estrutura condicional

console.log (sw || "lampada desligada")

