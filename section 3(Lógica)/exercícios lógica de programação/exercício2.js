const ePaisagem = (largura,altura) => largura>altura;

// const ePaisagem = (largura,altura) => largura>altura ? true : false;

// function ePaisagem(largura, altura){
//     largura>altura ? true : false;
// }

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i<10; i++){
    let num1 = gerarNumero(0,10);
    let num2 = gerarNumero(0,10);

    console.log(`(${ePaisagem(num1,num2)}) ${num1} de largura e ${num2} de altura`);
}