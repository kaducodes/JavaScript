let num = [5, 8, 4]
//acrescentar espaço no vetor
num[3] = 6
//acrescentar valor na última posição do vetor
num.push(7)
//saber o comprimento do array (vetor)
num.length
console.log(`O vetor tem ${num.length} elementos`)
//todos os elementos em ordem crescente
num.sort()
console.log(`Nosso vetor em ordem crescente dos elementos é o ${num}`)
//mostrar elementos isoladamente
console.log(`O primeiro elemento do vetor é ${num[0]}`)
//mostrar elementos do vetor sem aparecer os colchetes
//faz uma variável de contagem e coloca em uma estrutura de repetição
console.log('O vetor mostrado sem colchete: ')
/*
for (let cont = 0; cont < num.length; cont++) {
    console.log(`O elemento ${cont} tem o valor ${num[cont]}`)
}
*/
//usando o for otimizado para vetores e objetos
for (let cont in num) {
    console.log(`O elemento ${cont} tem o valor ${num[cont]}`)
}
//buscar valores dentro de um vetor
let pos = num.indexOf(6)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está no elemento ${pos}`)
}
