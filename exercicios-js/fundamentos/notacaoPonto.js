console.log(Math.ceil(6.2))

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('exec....')
    }
}

const obj2 = new Obj('tijolo')
const obj3 = new Obj('cimento')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()