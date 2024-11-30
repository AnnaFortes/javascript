let num = [5, 8, 2, 9, 3]

num.push(1) //adiciona, elemento ao vetor, como esta em ordem crescente o 1 vai estar no indice 0, se colocar o sort antes do push, o elemento adicionado, mesmo sendo o menor, vai para a ultima posição
num.sort() //colocando o array em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 8 está na posição ${pos}`)}