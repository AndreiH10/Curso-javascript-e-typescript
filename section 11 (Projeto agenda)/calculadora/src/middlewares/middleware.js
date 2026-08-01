exports.validacaoNumeros = (req, res, next) => {
    const expressao = req.body.expressao;

    //const regexValida = /^[0-9+\-*/().\s]+$/;
    const regexValida = /^\s*[-+]?\s*\(?\s*\d+(?:\.\d+)?\s*\)?\s*(?:[+\-*/]\s*\(?\s*[-+]?\s*\d+(?:\.\d+)?\s*\)?\s*)*$/;


    if (!expressao || !regexValida.test(expressao)) {
        return res.render('erro');
    }
    
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('erroCsrf');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.middlewareErrors = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
}

exports.middlewareSessions = (req, res, next) => {
    res.locals.user = req.session.user;
    next();
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
}