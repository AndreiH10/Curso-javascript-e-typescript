const nome = "Andrei";
const sobrenome = "Rodrigues";
const idade = 19;
const peso = parseInt('60');
const altura = 1.70;
let imc = peso / (altura * altura);
let anoNascimento = 2026 - idade;

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg, tem',altura,'m de altura, e seu IMC é de',imc);
console.log(`${nome} nasceu em ${anoNascimento}`);
