function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // pega o ano no sistema
    var fano = window.document.getElementById('txtano') //pega o ano na div do html digitado pelo usuário
    var res = window.document.querySelector('div#res') //pega a resposta na div do html para manipular
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex' )
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //confere se input-radio 0 está marcado
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemas.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmas.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomas.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosomas.jpg')
            }
        } else if (fsex[1].checked) { //confere se o input-radio 1 está marcado
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebefem.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemfem.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultofem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosofem.jpg')
            }
        }
        res.style.textAlign = 'center' //centraliza o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}