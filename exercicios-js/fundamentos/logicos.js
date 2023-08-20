// operadores lógicos 

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2  // operadores de curcocircuito 
    // const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    // para retornar tds esses valores é só colocá los dentro de um objeto
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true)) // compra tv 50 e toma sorvete 
console.log(compras(true, false)); // toma sorverte e compra tv 32
console.log(compras(false, true)); // toma sorvete e compra tv 32
console.log(compras(false, false)); // nao compra nada