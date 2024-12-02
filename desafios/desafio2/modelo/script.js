let numNovo = []

function numero() {
    let num = Number(document.querySelector('input#num').value)
    let select = document.getElementById('add')
    if (num < 1 || num > 100 || isNaN(num) || numNovo.includes(num)) {
        alert('Valor inválido ou já encontrado na lista!')
    } else {
        numNovo.push(num)

        let option = document.createElement('option')
        option.textContent = `Valor ${num} adicionado`
        select.appendChild(option)
    }
    document.querySelector('input#num').value = '' //limpa o campo
    document.querySelector('input#num').focus()
}

function fim() {
    if (numNovo.length === 0) {
        alert('Adicione valores antes de finalizar!')
        return
    } 

    let select = document.getElementById('add')

    select.innerHTML = ''

    //total de numeros
    let optionTodos = document.createElement('option')
    optionTodos.textContent = `Ao todo temos ${numNovo.length} números cadastrados`
    select.appendChild(optionTodos)
    
    //maior e menor
    let maiorNum = Math.max(...numNovo)
    let menorNum = Math.min(...numNovo)

    let optionMaior = document.createElement('option')
    optionMaior.textContent = `O maior valor informado foi ${maiorNum}`
    select.appendChild(optionMaior)

    let optionMenor = document.createElement('option')
    optionMenor.textContent = `O menor valor informado foi ${menorNum}`
    select.appendChild(optionMenor)

    let soma = numNovo.reduce((total, valor) => total + valor, 0) //reduce faz o calculo de todo o array, total é o acumulador que vai começar em 0, valor é cada numero do array

    let optionSoma = document.createElement('option')
    optionSoma.textContent = `Somando todos os valores temos ${soma}`
    select.appendChild(optionSoma)

    let media = soma/numNovo.length

    let optionMedia = document.createElement('option')
    optionMedia.textContent = `A média dos valores digitados é ${media.toFixed(2)}`
    select.appendChild(optionMedia)
}     
