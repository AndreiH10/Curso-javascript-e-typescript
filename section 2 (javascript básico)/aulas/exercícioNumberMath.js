const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raíz quadrada: ${numero ** 0.5}.</p>`;

if(Number.isInteger(numero)){
    texto.innerHTML += `<p>${numero} é inteiro.</p>`
}else{
    texto.innerHTML += `<p>${numero} não é inteiro.</p>`
}

if(Number.isNaN(numero)){
    texto.innerHTML += `<p>${numero}</p>`
}else{
    texto.innerHTML += `<p>${numero} é um Number.</p>`
}

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;