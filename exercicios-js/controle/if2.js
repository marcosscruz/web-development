function teste1(num) {
    if (num > 8)
        console.log(num)
    console.log('Final')
}

// teste1(8)
// teste1(9)

function teste2(num) {
    if (num > 7); { // cuidado com o ;, não use com as estruturas de controles
        console.log(num)
    }
}

teste2(6)
teste2(8)