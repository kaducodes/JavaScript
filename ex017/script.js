function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
    }
    /* Utilizando o for
    for (var c = 1 ; n <= n * 10 ; c++) {
        var m = n * c
        res.innerHTML += `${n} x ${c} = ${m}`
    }
    */
    // Utilizando o while
    var c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        var item = document.createElement('option') //criar option de forma dinâmica do js para o html
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}` // só é necessário com outras linguagens como php, mas aqui ele chamará os options de tab1, tab2, tab3...
        tab.appendChild(item)
        c++
    }
}