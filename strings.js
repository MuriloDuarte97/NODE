/**
 * Strings
 */

const professor = "José de Assis"
//indice            0123456789...
console.log(typeof(professor))
console.log(professor)
//obtendo o valor de um caractere da string
console.log(professor.charAt(8))
console.log(professor.charAt(9))
//para obter o valor do indice de uma string
console.log(professor.indexOf("é"))
//Obter uma sequencia a partir do indice
console.log(professor.substring(8))
//é possivel alterar o conteudo da string
console.log(professor.replace("José","Zé"))//( original,novo)
//Dica: replace(",",".")

/**** concatenação ****/
const x = 2
const y = Number ("3")
console.log(typeof(x))
console.log(typeof(y))
console.log("valor de x: " + x)
console.log("2" + x) //concatena
console.log("3" - x)//subtrai (o mesmo para * /)
console.log("professor: " + professor)
//evitar o usu do + na concatenação
//para concatenar usar crases ``
console.log(`professor: ${professor}`)
