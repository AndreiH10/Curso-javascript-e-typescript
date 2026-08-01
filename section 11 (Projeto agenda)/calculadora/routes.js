const express = require('express');
const route = express.Router();

//controllers
const homeCalculadora = require('./src/controllers/homeCalculadora');
const loginController = require('./src/controllers/loginController');

const { validacaoNumeros, loginRequired } = require('./src/middlewares/middleware');

route.get('/calculadoraAntiga', loginRequired, homeCalculadora.calculadoraAntiga);

route.post('/calcular', homeCalculadora.calculo);

route.post('/calcular2', validacaoNumeros, homeCalculadora.calculo2);

route.get('/historico', loginRequired, homeCalculadora.historico);

route.get('/historicoGeral', loginRequired, homeCalculadora.historicoGeral);

// route.get('/', homeCalculadora.links);

route.get('/calculadora', loginRequired, homeCalculadora.calculadoraNova);

//login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);
route.get('/', loginController.paginaInicial);

module.exports = route;