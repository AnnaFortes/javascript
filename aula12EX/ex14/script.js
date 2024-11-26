function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
     //bom dia
     img.src = 'foto-manha.png'
     document.body.style.background = '#feee8c'
} else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = 'foto-tarde.png'
    document.body.style.background = '#f48300'
} else {
    //boa noite
    img.src = 'foto-noite.png'
    document.body.style.background = '#233a6c'
}
}