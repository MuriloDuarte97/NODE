/**
 * ARRAY - VETOR
 */

//para criar um vetor basta adicionar []
// indice        [0]         [1]       [2]     [3]
let times = ["São paulo","palmeiras","santos","psg"]
console.log(times)
// no js um vetor é heterogenio e dinamico

//para saber o tamanho do vetor
console.log(times.length)
//recuperar o valor do vetor
console.log(times[0])
//adicionando um valor ao vetor
times[5] = "flamengo"
console.log(times)
console.log(times[5])
//adicionando multiplos valores
times.push("cruzeiro","barcelona","real madrid")
console.log(times)
console.log(times.length)
console.log(times.indexOf("palmeiras")) // descobrir qual o indice do valor

//adicionando itens aletorios ao vetor
times.push(true, 1990, null)
console.log(times)

//removendo um item do vetor
delete times[1]
console.log(times)
