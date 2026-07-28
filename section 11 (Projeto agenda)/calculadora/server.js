const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(routes);

const PORT = 3000;
app.listen(PORT , () => {
    console.log(`Servidor aberto em https://localhost:3000`);
})