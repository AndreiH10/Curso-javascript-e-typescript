const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    // console.log(req.session.user);
    res.render('login', { titulo: 'login' });
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect(req.get('Referrer') || '/login/index');
            })
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
            req.session.save(function () {
                return res.redirect(req.get('Referrer') || '/login/index');
            })

    } catch(e){
        console.log(e);
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect(req.get('Referrer') || '/login/index');
            })
            return;
        }

        //req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('/calculadora');
        })

    } catch(e){
        console.log(e);
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login/index');
}

exports.paginaInicial = (req, res) => {
    if(req.session.user){
        res.redirect('/calculadora');
    } else {
        res.redirect('/login/index');
    }
}