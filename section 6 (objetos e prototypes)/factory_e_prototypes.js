const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = Object.assign({}, falar, comer, beber)

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p1);