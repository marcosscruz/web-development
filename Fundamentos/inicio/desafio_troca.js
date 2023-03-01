let a = 7;
let b = 94;

// depois da troca -> a = 94 e b = 7

let aux;

console.log('Variáveis a e b: ' + a + ', ' + b);

aux = a;
a = b;
b = aux;

console.log('Variáveis a e b trocadas: ' + a + ', ' + b);

// outro método de troca de variáveis em js 

[a, b] = [b, a]
console.log('Novamente trocadas: ' + a + ', ' + b);