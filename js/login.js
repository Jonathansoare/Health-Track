const inputEmail = document.getElementById('input_login')
const inputSenha = document.getElementById('input_senha')
const btn = document.getElementById('btn_login')
const alert = document.getElementById('alert-msg')

user = 'jonathan@gmail.com'
password = 1234

btn.addEventListener("click", (el) => {
    el.preventDefault()
    email = inputEmail.value;
    senha = inputSenha.value;

if (email == "" || senha == ""){
    mostraMsg("red","Preecha todos os campos")
}
else{
    validarEmail(email)
}

/* Mostra uma mensagem de alerta*/
function mostraMsg(y,a){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').style.color = y
    setTimeout(() => {
        mostraMsg("","")
    }, 7000);
}

/*validar se o emial tem @*/
function validarEmail(x){
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var resul  = emailPattern.test(x);


    if (resul == true){
        validarUser()
    }
    else{
        mostraMsg('red',"Usuario ou Senha invalidor!")  
    }
}
/* Validar o usuario com o banco de dados*/
function validarUser(){
    const mylocal = JSON.parse(localStorage.getItem('user'))

    if (email == Object.entries(mylocal)[0][1] && senha == Object.entries(mylocal)[1][1]) {
            location.href = "/views/dashboard.html"
        }
        else{
            mostraMsg('red',"Usuario ou Senha invalidor!")
        }
}
})