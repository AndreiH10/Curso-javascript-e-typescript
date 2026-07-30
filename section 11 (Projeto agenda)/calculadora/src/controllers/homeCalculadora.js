const Calculos = require('../models/CalculosModel');

exports.calculadoraAntiga = (req, res) => {
    res.render('paginaCalculadora');
}

exports.links = (req, res) => {
    res.render('links', { titulo: 'home' });
}

exports.calculadoraNova= (req, res) => {
    res.render('paginaCalculadoraNova', { titulo: 'Calculadora' })
}

exports.historico = async (req, res) => {
    try {
        const calculos = await Calculos.buscaCalculos();
        return res.render('historico', { calculos, titulo: 'Histórico' });
    } catch (e) {
        console.log(e);
        return res.render('erro')
    }
}

exports.calculo = async (req, res) => {
    const n1 = parseFloat(req.body.num1);
    const n2 = parseFloat(req.body.num2);
    const operacao = req.body.operacao;
    let resultado = 0;
    let sinalOperacao;

    if (operacao === 'soma') {
        resultado = n1 + n2;
        sinalOperacao = '+'
    }
    if (operacao === 'subtracao') {
        resultado = n1 - n2;
        sinalOperacao = '-'
    }

    //res.render('paginaResultadoNova', { resultado, titulo: 'Resultado' });

    try{
        const calculo = new Calculos(req.body)
        const expressao = `${n1}${sinalOperacao}${n2}`
        const dados = await calculo.registra(expressao, resultado)
        console.log(dados);
        return res.render('paginaResultadoNova', { resultado, titulo: 'Resultado' });
    } catch(e){
        console.log(e);
    }
}

exports.calculo2 = async (req, res) => {
    const expressao = req.body.expressao;
    let resultado;

    try {
        resultado = eval(expressao);
    } catch (e) {
        resultado = 'Erro na expressão';
    }

    try{
        const calculo = new Calculos(req.body)
    
        const dados = await calculo.registra(expressao, resultado)
        console.log(dados);
        return res.render('paginaResultadoNova', { resultado, titulo: 'Resultado' });
    } catch(e){
        console.log(e);
    }
        
}
