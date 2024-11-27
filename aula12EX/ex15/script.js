function carregar() {
var idade = document.getElementById('idade')
var mas = document.getElementById('mas')
var fem = document.getElementById('fem')
var clique = document.getElementById('cique')
var msg = document.getElementById('msg')

switch (idade) {
    case 0:
        if (idade <= 8 && sexo == mas) {
            img.src = 'menino-5.png'
        }
        break
    case 1:
        if (idade <= 20 && sexo == mas) {
            img.src = 'menino-15.png'
        }
        break
    case 2:
        if (idade <= 30 && sexo == mas) {
            img.src = 'homem-jovem.png'
        }
        break
    case 3:
        if (idade <= 50 && sexo == mas) {
            img.src = 'homem-40.png'
        }
        break
    case 4:
        if (idade < 51 && sexo == mas) {
            img.src = 'homem-velho.png'
        }
        break
    case 5:
        if (idade <= 8 && sexo == fem) {
            img.src = 'menina-5.png'
        }
        break
    case 6: 
    if (idade <= 20 && sexo === fem) {
        img.src = 'mulher-15.png'
    }
    break
    case 7:
        if (idade <= 30 && sexo == fem) {
            img.src = 'mulher-jovem.png'
        }
        break
    case 8:
        if (idade <= 50 && sexo == fem) {
            img.src = 'mulher-40.png'
        } 
        break
    case 9:
        if (idade > 51 && sexo == fem) {
            img.src = 'mulher-velha.png'
        }
}
}
