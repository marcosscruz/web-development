const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//como var não tem escopo de bloco, para toda chamada da função irá imprimir o valor 10
