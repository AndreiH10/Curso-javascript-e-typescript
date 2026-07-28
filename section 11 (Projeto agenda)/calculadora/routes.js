const express = require('express');
const route = express.Router();

const homeCalculadora = require('./src/controllers/homeCalculadora');

route.get('/calculadora', homeCalculadora.home);

route.post('/calcular', homeCalculadora.calculo);

module.exports = route;