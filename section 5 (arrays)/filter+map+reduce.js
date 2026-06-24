const numeros = []

const numeroAleatorio = max => Math.floor(Math.random() * max);

for (let i = 0; i < 13; i++) {
    numeros.push(numeroAleatorio(100))
}

const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0;
});
const dobro = numeros.map(function (valor) {
    return valor * 2;
})
const soma = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador
}, 0)

// const todosJuntos = numeros.filter(function(valor){
//     return valor % 2 === 0;
// }).map(function(valor){
//     return valor * 2;
// }).reduce(function(acumulador, valor){
//     acumulador += valor;
//     return acumulador
// }, 0)

const todosJuntos = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor, 0)

// console.log(numerosPares);
// console.log(dobro);
// console.log(soma);
console.log(todosJuntos);