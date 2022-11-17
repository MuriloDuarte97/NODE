/**
 * exemplos de uso do vetor
 */

let nipes = ["ouros","copas","espadas","paus"]
let faces = ["A",2,3,4,5,6,7,8,9,10,"J","K","Q"]

//recuperando a carta "A de ouros"

console.log(`CARTA: ${faces[0]} de ${nipes[0]}`)

//Recuperando a carta "Q de Copas"
console.log(`CARTA: ${faces[12]} de ${nipes[1]}`)

//sorteio de uma carta
//math.random = gerador de numeros aleatorios
//math.floor = deixa o numero inteiro
let nipe = Math.floor(Math.random() * 4)
console.log(nipe)

let face = Math.floor(Math.random() * faces.length)
console.log(face)

console.log(`carta sorteada: ${faces[face]} de ${nipes[nipe]}`)
