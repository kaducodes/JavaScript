function lista() {
    window.alert('lista')
    let num = window.document.getElementById('caixaNumero')
    let n = Number(num.value)
    let lista = window.document.getElementById('lista')
    let valores = []
    if (n < 1 && n > 100){
        window.alert('Número inválido ou já está na lista')
    }   
}

function finalizar(){
    window.alert('finalizar')
}