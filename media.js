/**
 * calculo de media com 2 formas
 */

//importar o pacote 
let color = require(`colors`)
const read = require("readline-sync")
let nome = read.question("digite seu nome: ")
console.log(`aluno: ${nome}`)
let nota1 = Number(read.question("qual a nota 1?").replace(",","."))
let nota2 = Number(read.question("qual a nota 2?").replace(",","."))
//processamento
let media = (nota1 + nota2) / 2
//saida
console.log(`media: ${media.toFixed(1)}`)
//status
if(media < 5) {
    console.log("REPROVADO".red)
} else {
    console.log("APROVADO.blue".blue)
}


