const array = []

const numeroAleatorio = (max) =>{
    return Math.floor(Math.random() * max);
}

for(let i = 0;i<10;i++){
    array.push(numeroAleatorio(50))
}

console.log(array);

const numerosFiltrados = array.filter(valor => valor>20 && valor<30);
console.log(numerosFiltrados);