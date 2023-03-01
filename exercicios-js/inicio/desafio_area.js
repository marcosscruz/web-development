// PI = 3.14159265358979323846
// area = PI * raio^2

const PI = 3.14159265358979323846;
let raio = 5;
let areaCirc;

areaCirc = PI * (raio ** 2);
areaCirc = +(areaCirc.toFixed(2)); //toFixed -> serve para arredondar números decimais para casas que desejar

console.log('Área da circunferência: ' + areaCirc + 'm2');
console.log(Math.PI); // valor de PI por js