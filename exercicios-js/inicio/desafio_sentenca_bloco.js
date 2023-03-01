var num, par, impar;

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Números Impares - Bloco 1')
for (var i = 0; i < 10; i++) {
    if (num[i] % 2 != 0) {
        impar = num[i];
        console.log(impar);
    }
}

console.log('\nNúmeros Pares - Bloco 2')
for (var i = 0; i < 10; i++) {
    if (num[i] % 2 == 0) {
        par = num[i];
        console.log(par);
    }
}