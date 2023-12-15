function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Deu bom mlk! Sua nota: " + nota)
    } else {
        console.log("Sinto muito marreco. Sua nota: " + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('é verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})