let valores = [] //definir fora da função para não zerar o histórico toda vez que a função for chamada
let soma = 0

function lista() {
    // pega o número do input
    let num = window.document.getElementById('caixaNumero')
    let n = Number(num.value)
    let lista = window.document.getElementById('lista')
    if (n < 1 || n > 100 || valores.includes(n)){ //verifica se está dentro do intervalo especificado e se já foi incluído
        window.alert('Número inválido ou já está na lista')
    } else {
        let opcao = document.createElement('option')
        opcao.text = `Valor ${n} adicionado!`
        lista.appendChild(opcao) 
        res.innerHTML = ''
        valores.push(n) //adiciona novo número ao vetor
        soma += n //adiciona novo número à soma
    }  
    num.value = '' //limpa o input
    num.focus() //coloca o foco de volta no input
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicionar valores antes de finalizar')
    } else {
        let res = document.getElementById('res')
        // Ao todo temos x números cadastrados   
        let qtd = valores.length
        res.innerHTML += `<p>Ao todo temos ${qtd} números cadastrados</p>`
        // O maior valor informado foi
        valores.sort()
        res.innerHTML += `<p>O maior valor informado foi ${valores[qtd - 1]}</p>`
        // O menor valor informado foi
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}</p>`
        // Somando todos os valores, temos x
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        // A média dos valores digitados é x
        let media = soma / qtd
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}