/**
 * calculo imc
 */

let read = require(`readline-sync`)

let peso = Number(read.question("qual o seu peso?"))
let altura = Number(read.question("qual a sua altura?"))

let imc = peso / (altura * altura)

console.log(`imc: ${imc.toFixed(1)}`)

if (imc < 18.5) {
    console.log ("Abaixo do peso")
} 
if (imc > 18.5 && imc < 25) {
        console.log("Peso ideal")
}
if (imc > 24.9 && imc < 30) {
    console.log("levemente acima do peso")
}
if (imc > 29.9 && imc < 35) {
    console.log("obesidade grau 1")
}
if (imc > 34.9 && imc < 40) {
    console.log("obesidade grau 2")
} else {
    console.log("obesidade grau 3 (Morbida)")
}