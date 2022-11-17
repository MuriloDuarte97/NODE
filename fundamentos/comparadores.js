/**
 * Comparadores 
 */
//comparadores se revere a variaveis
console.log("comparadores")
console.log(">  | maior  que")
console.log(">= | maior ou igual a")
console.log("<  | menor que")
console.log("<= | menor ou igual a")
console.log("!= | diferente de (BUG)")
console.log("!== | diferente de")

let x = 2
let y = "2"
console.log(typeof(x))
console.log(typeof(y))

//demonstração do bug com ==
if (x == y) {
    console.log("x  igual a y")
} else {
       console.log("x é diferente de y")
}

//demonstrção do bug !=
if (x != y) {
    console.log("x é igual a y")
} else {
    console.log("x é diferente de y")
}
