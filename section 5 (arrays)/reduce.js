const numeros = []

const numeroAleatorio = max => Math.floor(Math.random() * max);

for(let i = 0;i<13;i++){
    numeros.push(numeroAleatorio(100))
}

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    //if(valor % 8 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total);