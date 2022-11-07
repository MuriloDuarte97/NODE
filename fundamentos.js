/**
 * Fundametos do JS
 */


//A linguagem JS trabalha com sentenças
//: é opcional
//Você pode usar ' ' ou "" mas não pode usar os dois ao mesmo tempo
console.log('HELLO JS')
{
        console.log("BLOCO")
}

//Variaveis no JS não são tipadas
//var let const (são usados para alocação de memória)

var nome = "murilo"
var idade = 19
var vip = true
console.log("Nome: " + nome)
console.log("Tipo de variavel: " + typeof(nome))
console.log("idade: " + idade)
console.log("tipo de variavel: " + typeof(idade))
console.log("vip: " + vip)
console.log("Tipo de variavel: " + typeof(vip))

//------------------------------------------------------------------------------------------------------------------------
//Problemas no uso do var para declarar uma variavel
var teste = "HELLO" //Criar uma variavel
teste = "Ola Mundo" // alterar a variavel
var teste = "BUG1" //Redeclarar a variavel
console.log(teste)

// let resolve este problema
let teste2 = "hello2" //criar uma variavel
teste2 = "Ola Mundo 2"
//let teste2 = "BUG2" //o let protege a variavel permitindo a criação de uma seunda variavel com o mesmo nome
console.log(teste2)