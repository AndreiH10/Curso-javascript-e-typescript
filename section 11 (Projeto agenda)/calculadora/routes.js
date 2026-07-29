const express = require('express');
const route = express.Router();

const homeCalculadora = require('./src/controllers/homeCalculadora');

const { validacaoNumeros } = require('./src/middlewares/middleware');

route.get('/calculadora', homeCalculadora.home);

route.post('/calcular', homeCalculadora.calculo);

route.post('/calcular2', validacaoNumeros, homeCalculadora.calculo2);

route.get('/', homeCalculadora.pagina);

module.exports = route;