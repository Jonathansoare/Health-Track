const inputEmail = document.getElementById('input-email')
const inputSenha = document.getElementById('input-senha')
const btn = document.getElementById('btn_login')
const alert = document.getElementById('alert-msg')


btn.addEventListener("click", (el) => {
    el.preventDefault()
    const email = inputEmail.value;
    const senha = inputSenha.value;

    validarUser(email,senha)


/* Mostra uma mensagem de alerta*/
function mostraMsg(a,y){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').classList.remove('msg-erro'|| 'msg')
    document.getElementById('alert-msg').classList.add(y)
    document.getElementById('alert-msg').style.transition = '0.2s'
    setTimeout(() => {
        document.getElementById('alert-msg').innerHTML = ""
        document.getElementById('alert-msg').classList.remove('msg-erro' && 'msg')
        document.getElementById('alert-msg').style.transition = '0.2s'
    }, 5000);
}

function erroInputs(a,y){
    a.classList.remove("input-register-erro" || "input-register")
    a.classList.add(y)
}

/*validar se o email tem @*/
function validarEmail(email){
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var resul  = emailPattern.test(email);
    if (resul == true){
        return true
    }
    else{
        return false
    }
}

function validaForm(email,senha){
    if(email === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Nome inválido",'msg-erro')
        erroInputs(inputEmail,"input-register-erro")
        return false
    }
    else if (validarEmail(email) !== true){
        mostraMsg("","msg-erro")
        mostraMsg("Por favor, forneça um endereço de email válido.",'msg-erro')
        erroInputs(inputEmail,"input-register-erro")
        return false;
    }
    else if(senha === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Senha inválida",'msg-erro')
        erroInputs(inputEmail,"input-register")
        erroInputs(inputSenha,"input-register-erro")
        return false
    }
    else{
        mostraMsg("","msg-erro")
        erroInputs(inputEmail,"input-register")
        erroInputs(inputSenha,"input-register")
    }
    return true
}

/* Validar o usuario com o banco de dados*/
function validarUser(email,senha){
    const Local = JSON.parse(localStorage.getItem('user'))
    if(validaForm(email,senha) == true){
        if(email === Object.entries(Local)[0][1].email && senha === Object.entries(Local)[0][1].senha){
            location.href = '../views/dashboard.html'
        }
        else{
            mostraMsg("Usuario ou senha invalido!",'msg-erro')
        }
    }
}
})