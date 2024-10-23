function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value == 0 || passo.value == 0) {
        res.innerHTML = `Impossível contar`
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido. Considerando Passo = 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (var c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //Contagem Regressiva
            for (var c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }  
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
