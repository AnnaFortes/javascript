//teste de contagem supondo a entrada do usuario

/* var i = 10
var p = 2
var f = 1
do {
    console.log(`Contando ${i}`)
    i -= p
} while (i >= f) */

/*
var tab = 5 
for (var num = 1; num <= 10; num++) {
     res = tab * num 
}
*/
//console.log('Por favor, digite um número!')

let num = [2, 4, 6, 8, 10, 16, 20]
let soma = 0 //armazena a soma dos numeros(começa fora do loop)
for (let pos in num) { // para a posição em cada numero
    soma += num[pos] //soma = soma + numero da posição
}
console.log(soma)


