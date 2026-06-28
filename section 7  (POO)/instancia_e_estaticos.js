class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Métodos de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //Métodos estáticos
    static trocaPilha(){
        console.log('Ok, vou trocar.');
    }
    static soma(x, y){
        return x+y;
    }
}

const controle1 = new ControleRemoto('LG');

ControleRemoto.trocaPilha();

console.log(ControleRemoto.soma(10,20));