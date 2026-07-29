const CalculosModel = require('../models/CalculosModel');

exports.home = (req, res) => {
    res.render('paginaCalculadora');
}

exports.pagina = (req, res) => {
    res.render('pagina');
}

exports.calculo = (req, res) => {
    const n1 = parseFloat(req.body.num1);
    const n2 = parseFloat(req.body.num2);
    const operacao = req.body.operacao;
    let resultado = 0;

    if (operacao === 'soma') resultado = n1 + n2;
    if (operacao === 'subtracao') resultado = n1 - n2;

    res.render('paginaResultado', { resultado });
}

exports.calculo2 = (req, res) => {
    const expressao = req.body.expressao;
    let resultado;

    try{
        resultado = eval(expressao);
    } catch(e){
        resultado = 'Erro na expressão';
    }
    


    CalculosModel.create({
        calculo: expressao,
        resultado: resultado
    })
    .then(dados=>{
        console.log(dados);
        return res.render('paginaResultado', { resultado });
    })
    .catch(e=>console.log(e));
}
