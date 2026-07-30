const express = require('express');
const route = express.Router();

const homeCalculadora = require('./src/controllers/homeCalculadora');

const { validacaoNumeros } = require('./src/middlewares/middleware');

route.get('/calculadoraAntiga', homeCalculadora.calculadoraAntiga);

route.post('/calcular', homeCalculadora.calculo);

route.post('/calcular2', validacaoNumeros, homeCalculadora.calculo2);

route.get('/historico', homeCalculadora.historico);

route.get('/', homeCalculadora.links);

route.get('/calculadora', homeCalculadora.calculadoraNova);

module.exports = route;