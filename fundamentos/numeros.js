/**
 * numeros
 */

const peso = 62.0 //62,0 era um bug
const altura = 1.63
console.log(typeof(peso))
console.log(typeof(altura))
//dica para saber se um numero é inteiro ou não
console.log(Number.isInteger(altura)) //true ou false
console.log(Number.isInteger(peso)) //true ou false

const imc = peso / (altura * altura)
console.log(`imc: ${imc.toFixed(1)}`) //TOFIXED(2) Arredondar as casas decimais

//Atenção !!!
let x = 2

console.log (10/x)

