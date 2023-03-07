/*Uma função é basicamente um bloco que contem procedimentos, ou seja, conjunto
de instruções que executa uma tarefa. */

function quadrado1(num) {
    return num * num
}
console.log(quadrado1(2))

/*Uma função tbm pode ser anônima, ou seja, não possui um nome. */

var quadrado2 = function (numero) { return numero * numero }
var x = quadrado2(3);
console.log(x)

/*Outra forma é a Arrow Functions, sua aplicação é melhor aproveitada em funções
que não sejam métodos, e não podem ser usadas como construtoras. */

const incrementar = (numero) => {
    return numero + 1
}
console.log(incrementar(0))

/*Outra forma de declarar Arrow Functions é através de sua expressão mias encuta. */

const incrementar2 = numero => numero + 1
console.log(incrementar2(9))