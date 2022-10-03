
const inputEmail = document.getElementById('input_login')
const inputSenha = document.getElementById('input_senha')
const btn = document.getElementById('btn_login')
const alert = document.getElementById('alert-msg')

user = 'jonathan@gmail.com'
password = 1234

btn.addEventListener("click", (event) => {
    event.preventDefault()

    const email = inputEmail.value
    const senha = inputSenha.value

    if (email == "" && senha == ""){
        mostraMsg('alert-msg',"red","Preecha todos os campos")
    }
    else{
        validarEmail(email)
    }
})

function mostraMsg(x,y,a){
    document.getElementById(x).innerHTML = a
    document.getElementById(x).style.color = y
    setTimeout(() => {
        mostraMsg('alert-msg',"","")
    }, 7000);
}

function validarEmail(x){
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var resul  = emailPattern.test(x);
    email = inputEmail.value;
    senha = inputSenha.value;

    console.log(resul);

    if (resul == true){
        console.log("email certo");
        if (email == "jonathan@gmail.com" && senha == 90351222){
            location.href = "./views/dashboard.html"
            console.log("login certo");
        }
        else{
            console.log("email ou senha errado!");
        }
    }
    else{
        mostraMsg('alert-msg',"red","Email errado")
        console.log("email errado");
    }
}

function validarUser(){
    
}