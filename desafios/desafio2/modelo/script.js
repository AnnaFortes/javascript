let numNovo = []
function numero() {
    let num = Number(document.querySelector('input#num').value)
    numNovo.push(num)
    if (num > 1 || num <= 100 || isNaN(num) || num == '') {
        alert('Valor inválido ou já encontrado na lista!')
    } 
}

function fim(numNovo) {
    for (let comprimento in numNovo[comprimento]) {
        let optionTodos = document.getElementById('option')
        optionTodos.textContent = `Ao todo temos ${numNovo[comprimento]} números cadastrados`
        select.appendChild(optionTodos)
    }

    let maiorNum = Math.max(...numNovo)
    let menorNum = Math.min(...numNovo)

    let select = document.getElementById('select#add')

    let optionMaior = document.createElement('option')
    optionMaior.textContent = `O maior valor informado foi ${maiorNum}`
    select.appendChild(optionMaior)

    let optionMenor = document.createElement('option')
    optionMenor.textContent = `O menor valor informado foi ${menorNum}`
    select.appendChild(optionMenor)

    let soma = 0 //armazena a soma dos numeros(começa fora do loop)
        for (let pos in num) { // para a posição em cada numero
        soma += num[pos] //soma = soma + numero da posição

    let optionSoma = document.createElement('option')
    optionSoma.textContent = `Somando todos os valores temos ${soma}`
    select.appendChild(optionSoma)

    let optionMedia = document.createElement('option')
    optionMedia.textContent = `A média dos valores digitados é ${soma / pos}`
    select.appendChild(optionMedia)
}     
} 