const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const nomeDaPessoa = pessoas.map(obj => obj.nome)
const idadeDaPessoa = pessoas.map(obj => obj.idade)
const idades = pessoas.map(obj => ({ idade: obj.idade }))

console.log(nomeDaPessoa);
console.log(idadeDaPessoa);
console.log(idades)