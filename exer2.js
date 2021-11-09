function validar(){
    var nome = cadastro.nome.value;
    var cpf = cadastro.cpf.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var confirma = cadastro.confirma.value;

    if(nome==""){
        alert("Nome e campo obrigatórios!");
        cadastro.nome.focus();/* da foco? */
        return false;/* ele não envia o forumulario se ele estiver vazio  */
        
    }
    if(cpf==""){
        alert("CPF é um campo de preenchimento obrigatório!");
        cadastro.cpf.focus();
        return false;
    }
    if(cpf.length !=14){
        alert("CPF invalido!");
        cadastro.cpf.focus();
        return false;
    
    }

    if(email==""){
        alert("Campo E-mail é de preenchimento obrigatório");
        cadastro.email.focus();
        return false;
    }
    if(senha==""){
        cadastro.senha.focus();
        return false;
    }

    if(senha.length <6 ||senha.length >10){
        alert("Senha invalida, deve ter no minimo 6 numeros e no máximo 10!");
        cadastro.senha.focus();
        return false;
    }
    if(isNaN(senha)){ /* se naquele campo não for um numero jogar um alerta */
        alert("A senha deve conter numeros!");
        cadastro.senha.focus();
        return false;

    }

    if(confirma==""){
        cadastro.confirma.focus();
        return false;
    }

    if(confirma != senha){
        alert("senhas não conferem!");
        cadastro.confirma.focus();
        return false;


    }

    }  

