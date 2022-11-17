/**
 * votação
 */

const readline = require('readline-sync')

let idade = readline.question("Digite a sua idade: ")

if ( idade < 16) {
    console.log("VOCE NAO TEM IDADE PARA VOTAR! ")
}   if ( idade > 15 && idade < 18) {
    console.log("VOTO FACULTATIVO! ")
}   if ( idade > 18 && idade < 72) {
    console.log("VOTO OBRIGATORIO! ")
}   if ( idade > 72 && idade < 120) {
    console.log("VOTO FACULTATIVO! ")
}   else {
    console.log("VOCE JA DEVE ESTAR MORTO! ")
}