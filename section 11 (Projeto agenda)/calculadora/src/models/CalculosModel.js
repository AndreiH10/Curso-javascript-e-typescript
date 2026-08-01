const mongoose = require('mongoose');

const CalculosSchema = new mongoose.Schema({
    calculo: { type: String, required: true },
    resultado: { type: Number, required: true },
    data: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Login', required: true }
})

const CalculosModel = mongoose.model('Calculos', CalculosSchema);

class Calculos {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.calculoSalvo = null;
    }

    static async buscaCalculos(userId) {
        const calculos = await CalculosModel.find({ user: userId }).sort({ data: -1 });
        return calculos;
    }

    static async buscaTodosOsCalculos(){
        const calculos = await CalculosModel.find().sort({ data: -1 }).populate('user', 'email');
        return calculos;
    }

    async registra(expressao, resultado, userId) {
        try{
            this.calculoSalvo = await CalculosModel.create({
                calculo: expressao,
                resultado: resultado,
                user: userId
            })
            return this.calculoSalvo;
        } catch(e) {
            console.log(e);
            throw e;
        }
    }
}


module.exports = Calculos;