//RECURSIVIDADE
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
} console.log(fatorial(5))

/* 
Fatorial é a multiplicação pelo numero inferior(decrescente)
5!: 5*4*3*2*1 == 120
ou
5*4 = 120
n!: n * (n-1)!
*/