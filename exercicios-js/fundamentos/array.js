const valores = [1.2, 3.4, 5.6, 7.8]
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna undefined

valores[4] = 9.1
console.log(valores)

valores[5] = 2.3
console.log(valores)
console.log(valores.length) // verificar tamanho do array

valores.push({ id: 3 }, false, true, 'teste') // adicionar item
console.log(valores)

console.log(valores.pop()) // deleta o ultimo item do array
delete valores[0]
console.log(valores)

console.log(typeof valores)