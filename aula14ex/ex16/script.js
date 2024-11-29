function contar() {
    var ini = Number(document.querySelector('input#ini').value)
    var fim = Number(document.querySelector('input#fim').value)
    var pas = Number(document.querySelector('input#pas').value)
    //var res = document.querySelector('div#res').value
    if (ini <= 0 || isNaN(ini)) {
        alert('Inválido! Digite um número válido. Considerando: INÍCIO 1')
        ini = 1;
    }
    
    if (pas <= 0 || isNaN(pas)) {
        alert('Passo inválido! Considerando: PASSO 1')
        pas = 1;
    }
    var resul = ''

    do {
        resul += `${ini} `
        ini += pas
    } while (ini <= fim)   
    
    document.querySelector('div#res').innerHTML = `Contando: ${resul}`
}