require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo').default || require('connect-mongo');

const sessionOptions = session({
    secret: 'eeeeeeeeeeeiiiiiiiiiiii',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sessionOptions);
app.use(flash());
app.use(csrf());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);
//falta os middleware

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    })
})