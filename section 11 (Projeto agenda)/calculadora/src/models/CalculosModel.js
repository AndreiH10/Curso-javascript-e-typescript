const mongoose = require('mongoose');

const CalculosSchema = new mongoose.Schema({
    calculo: { type: String, required: true },
    resultado: { type: Number, required: true },
    data: { type: Date, default: Date.now }
})

const CalculosModel = mongoose.model('Calculos', CalculosSchema);

class Calculos {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.calculoSalvo = null;
    }

    static async buscaCalculos() {
        const calculos = await CalculosModel.find().sort({ data: -1 });
        return calculos;
    }

    async registra(expressao, resultado) {
        try{
            this.calculoSalvo = await CalculosModel.create({
                calculo: expressao,
                resultado: resultado
            })
            return this.calculoSalvo;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }
}


module.exports = Calculos;