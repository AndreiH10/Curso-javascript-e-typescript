function maiorNumero(num1, num2){
    if(num1>num2){
        console.log(`${num1} é maior que ${num2}`);
        return num1;
    }else if(num2 > num1){
        console.log(`${num2} é maior que ${num1}`);
        return num2;
    } else{
        console.log(`${num1} e ${num2} são iguais`);
    }
}

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i<10; i++){
    let num1 = gerarNumero(0,10);
    let num2 = gerarNumero(0,10);

    maiorNumero(num1,num2);
}