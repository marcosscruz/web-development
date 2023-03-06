const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[0]()
funcs[8]()

//com o uso do 'let' na hora de imprimir o resultado a função irá lembra a memória do elemento requerido, isto é graças ao escopo do bloco