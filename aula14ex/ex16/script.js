function contar() {
    var ini = Number(document.querySelector('input#ini').value)
    var fim = Number(document.querySelector('input#fim').value)
    var pas = Number(document.querySelector('input#pas').value)
    //var res = document.querySelector('div#res').value
    if (ini <= 0 || isNaN(ini) || pas <= 0 || isNaN(pas) || fim <= 0 || isNaN(fim)) {
        alert('Inválido! Digite um número válido. Considerando: 1')
        return;
    }
    
    var resul = ''

    if(ini > fim) { //contagem regressiva
    do {
        resul += `${ini} 👉` //incrementando a variavel resul 
        ini -= pas // ini=ini-pas
    } while (ini >= fim) //enqnt ini for menor ou igual ao fim
    } else { //contagem progressiva
        do {
            resul += `${ini} 👉`
            ini += pas
        } while (ini <= fim)
    }   
        document.querySelector('div#res').innerHTML = `Contando: ${resul} 🏁`
}
