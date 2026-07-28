exports.home = (req, res) => {
    res.render('paginaCalculadora');
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