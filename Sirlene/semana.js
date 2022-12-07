const read = require('readline-sync')

let nome = (read.question("Qual o seu nome?: "))
let nascimento = Number(read.question("Em que ano voce nasceu? :"))
let atual = Number(read.question("Qual ano atual ?: "))

let idade = (atual - nascimento)
let semana = (idade * 521429)

console.log(`Murilo voce tem ${idade} anos de idade e ${semana} semanas de vida`)

