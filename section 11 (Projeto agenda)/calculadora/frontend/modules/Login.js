import validator from 'validator';

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const senhaInput = el.querySelector('input[name="senha"]');
        let error = false;

        const errosAntigos = this.form.querySelectorAll('.erro-validacao');
        errosAntigos.forEach(erro => erro.remove());
        
        if(!validator.isEmail(emailInput.value)){
            error = true;
            this.criaErro(emailInput, 'Email inválido');
        }

        if(senhaInput.value.length < 3 || senhaInput.value.length > 50){
            error = true;
            this.criaErro(senhaInput, 'Senha inválida');
        }

        if(!error) el.submit();
    }

    criaErro(campo, mensagem){
        const mensagemErro = document.createElement('div');

        mensagemErro.className = 'alert alert-danger mt-1 p-2 text-small erro-validacao';
        mensagemErro.innerHTML = `<strong>Erro:</strong> ${mensagem}`;

        campo.insertAdjacentElement('afterend', mensagemErro);
    }
}