const mongoose = require('mongoose');

const CalculosSchema = new mongoose.Schema({
    calculo: { type: String, required: true},
    resultado: { type: Number, required: true},
    data: { type: Date, default: Date.now}
})

const CalculosModel = mongoose.model('Calculos', CalculosSchema);

module.exports = CalculosModel;