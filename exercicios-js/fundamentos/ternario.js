// composto por 3 partes: primeiro a relação, segundo e terceiro, os resultados mediante a primeira parte

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

const resultado1 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.1))
console.log(resultado1(6.9))