// par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'fala' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'marcos',
    idade: 21,
    peso: 70,
    endereco: {
        logradouro: 'rua vazia',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)