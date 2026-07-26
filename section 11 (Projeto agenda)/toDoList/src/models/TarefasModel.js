const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, default: '' },
    feita: { type: Boolean, default: false }
})