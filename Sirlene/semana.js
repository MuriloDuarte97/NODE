const read = require('readline-sync')

let nome = (read.question("Qual o seu nome?: "))
let nascimento = Number(read.question("Em que ano voce nasceu? :"))
let atual = Number(read.question("Qual ano atual ?: "))

let idade = (atual - nascimento)
let semana = (idade * 521429)

<<<<<<< HEAD
console.log(`Murilo voce tem ${idade} anos de idade e ${semana} semanas de vida`)

=======
console.log(`Murilo voce tem ${idade} anos de idade e ${semana} semanas de vida`)
>>>>>>> d878bfe906c1dcccbe4cfc80b2a2063a2e237657
