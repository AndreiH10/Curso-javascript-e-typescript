require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const csrf = require('csurf');
const { checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;

app.use(helmet());


mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

//session configuração
const sessionOptions = session({
    secret: 'eeeeeeeiiiiiiii',
    store: MongoStore.create({ 
        mongoUrl: process.env.CONNECTIONSTRING 
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);

app.use(csrf());

//middlewares
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);

const PORT = 3000;
app.on('pronto', () => {
    app.listen(PORT , () => {
        console.log(`Servidor aberto em https://localhost:${PORT}/calculadora`);
    })
})