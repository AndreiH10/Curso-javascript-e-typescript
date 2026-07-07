const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');



route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaInicial);

module.exports = route;

//mongodb+srv://andreihenrique:<db_password>@cluster0.i0mxqlk.mongodb.net/?appName=Cluster0
//npm install mongodb