 function verifica() {
    var date = new Date() //data atual
        var ano = date.getFullYear() //ano atual
        var fano = document.getElementById('ano')
        var res = document.querySelector('div#res')
        if (fano.value.length == 0 || Number(fano.value) > ano) {      
            alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var sexo = document.getElementsByName('sexo')
            var idade = ano - Number(fano.value)//calculando a idade
            var genero = ''
            var img = document.createElement('img') //criando html img
            img.setAttribute('id', 'foto') //criando um id chamado foto
            if (sexo[0].checked) {
                genero = 'homem'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'menino-5.png')
                } else if (idade >= 11 && idade <= 20) {
                    img.setAttribute('src', 'menino-15.png')
                } else if (idade >= 21 && idade <= 38) {
                    img.setAttribute('src', 'homem-jovem.png')
                } else if (idade >= 39 && idade <= 50) {
                    img.setAttribute('src', 'homem-40.png')
                } else if (idade > 50) {
                    img.setAttribute('src', 'homem-velho.png')
                }
            } else if (sexo[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'menina-5.png')
                } else if (idade >= 11 && idade <= 20) {
                    img.setAttribute('src', 'menina-15.png')
                } else if (idade >= 21 && idade <= 38) {
                    img.setAttribute('src', 'mulher-jovem.png')
                } else if (idade >= 39 && idade <= 50) {
                    img.setAttribute('src', 'mulher-40.png')
                } else if (idade > 50) {
                    img.setAttribute('src', 'mulher-velha.png')
                }

            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
            res.appendChild(img)
        }
 }

//alert('Funcionou')
