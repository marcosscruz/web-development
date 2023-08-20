let num1 = 1
let num2 = 2

num1++ // pós fixado
console.log(num1)
--num1 // pré fixada
console.log(num1)

console.log(++num1 === num2--) // retorna true, pois o operador -- é executado depois de faer a comparação
console.log(num1 === num2)