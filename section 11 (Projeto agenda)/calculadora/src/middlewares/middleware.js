exports.validacaoNumeros = (req, res, next) => {
    const expressao = req.body.expressao;

    //const regexValida = /^[0-9+\-*/().\s]+$/;
    const regexValida = /^\s*[-+]?\s*\(?\s*\d+(?:\.\d+)?\s*\)?\s*(?:[+\-*/]\s*\(?\s*[-+]?\s*\d+(?:\.\d+)?\s*\)?\s*)*$/;


    if (!expressao || !regexValida.test(expressao)) {
        return res.render('erro');
    }
    
    next();
}