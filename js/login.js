const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const btn = document.querySelector('.btn-login');
const alert = document.getElementById('alert-msg');

const email = inputEmail.value
const senha = inputSenha.value;


document.addEventListener("click", (e) => {
    e.preventDefault()
    const el = e.target;
    if(el.classList.contains('btn-login')){
        validarLogin()
    }
    if(el.classList.contains('page-cadastro')){
        location.href = 'views/register.html'
    }
})

function validarLogin(){
    let time = setInterval(function () {
        if(validaEmail() === true && validaPassword() === true){
            clearInterval(time)
        }
    },1000);
    validarUser();
}

function validaEmail(){
    const email = inputEmail.value

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

    if(email === ""){
        erroInputs(inputEmail,"input-register-erro")
        mostraMsg("Email inválido",'msg-erro')
        return false
    }
    if(validarEmail(email) !== true){
        erroInputs(inputEmail,"input-register-erro")
        mostraMsg("Por favor, forneça um endereço de email válido.",'msg-erro')
        return false
    }
    else{
        erroInputs(inputEmail,"input-register")
        mostraMsg("",'msg-erro')
        return true
    }
}

function validaPassword(){
    const senha = inputSenha.value;
    const emailLocal = JSON.parse(localStorage.getItem('user'))

    if(senha === ""){
        mostraMsg("Senha inválida",'msg-erro')
        erroInputs(inputSenha,"input-register-erro")
        return false;
    }
    mostraMsg("","msg-erro")
    erroInputs(inputSenha,"input-register")
    return true;
}

function erroInputs(a,y){
    a.classList.remove("input-register-erro" || "input-register")
    a.classList.add(y)
}

function mostraMsg(a,y){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').classList.remove('msg-erro')
    document.getElementById('alert-msg').classList.add(y)
    document.getElementById('alert-msg').style.transition = '0.5s'
}

function validarUser(){
    const email = inputEmail.value;
    const senha = inputSenha.value;
    const emailLocal = JSON.parse(localStorage.getItem('user'))

    if(validaEmail() === true && validaPassword() === true){
        if(email === Object.entries(emailLocal)[0][1].email && senha === Object.entries(emailLocal)[0][1].senha){
            location.href = 'views/dashboard.html'
            return true
        }
        else{
            mostraMsg("Usuario ou senha incorreta","msg-erro")}
    }
}