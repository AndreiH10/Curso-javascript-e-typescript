const nome = 'Luiz';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);


class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
} 