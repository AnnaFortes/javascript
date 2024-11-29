function tabuada() {
var tab = Number(document.querySelector('input#num').value)

if (isNaN(tab)) {
    alert('Por favor, digite um número!')
    return;
} 
var resultado = ''

for (var num = 1; num <= 10; num++) {
    var res = tab * num
    resultado += `${tab} x ${num} = ${res}<br>`
}
document.querySelector('div#txt').innerHTML = resultado
}
