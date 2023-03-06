var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

/*
    o console vai retorna 2 tanto para dentro quanto para fora 
    isso ocorre pq a variavel numero foi sobescrita dentro do primeiro bloco
*/