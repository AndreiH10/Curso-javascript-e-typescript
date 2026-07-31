const express = require('express');
const route = express.Router();

//controllers
const homeCalculadora = require('./src/controllers/homeCalculadora');
const loginController = require('./src/controllers/loginController');

const { validacaoNumeros } = require('./src/middlewares/middleware');

route.get('/calculadoraAntiga', homeCalculadora.calculadoraAntiga);

route.post('/calcular', homeCalculadora.calculo);

route.post('/calcular2', validacaoNumeros, homeCalculadora.calculo2);

route.get('/historico', homeCalculadora.historico);

route.get('/', homeCalculadora.links);

route.get('/calculadora', homeCalculadora.calculadoraNova);

//login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);

module.exports = route;