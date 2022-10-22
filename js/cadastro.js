const emailInput = document.getElementById('input_email');
const senhaInput = document.getElementById('input_senha');
const btn = document.getElementById('btn');
const alert = document.getElementById('alert-msg').innerHTML;
const nomeInput = document.getElementById('nome')
const idadeInput = document.getElementById('idade')
const generoSelect = document.getElementById('genero')


btn.addEventListener("click", (event) => {
    const mylocal = JSON.parse(localStorage.getItem(''))
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const genero = generoSelect.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    validarUser(nome,idade,genero,email,senha)
})

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
function validarUser(nome,idade,genero,email,senha){
    if(validaForm(nome,idade,genero,email,senha) === true){
        if(email === "jonathans@gmail.com"){
            mostraMsg("Usuario já cadastrado",'msg-erro')
        }
        else{
            mostraMsg("Usuario cadastrado com sucesso!",'msg')
        }
    }  
}
function validaForm(nome,idade,genero,email,senha){
    if(nome === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Nome inválido",'msg-erro')
        erroInputs(nomeInput,"input-register-erro")
        return false
    }
    else if(idade === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Idade inválida",'msg-erro')
        erroInputs(nomeInput ,"input-register")
        erroInputs(idadeInput,"input-register-erro")
        return false
    }
    else if(idade < 18){
        mostraMsg("","msg-erro")
        mostraMsg("So pode cria conta acima de 18 Anos",'msg-erro')
        erroInputs(idadeInput,"input-register-erro")
        return false
    }
    else if(genero === "seleciona"){
        mostraMsg("","msg-erro")
        mostraMsg("Selecione um Genero",'msg-erro')
        erroInputs(idadeInput,"input-register")
        erroInputs(generoSelect,"input-register-erro")
        return false
    }
    else if(email === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Email inválido",'msg-erro')
        erroInputs(generoSelect,"input-register")
        erroInputs(emailInput,"input-register-erro")
        return false
    }
    else if (validarEmail(email) !== true){
        mostraMsg("","msg-erro")
        mostraMsg("Email inválido",'msg-erro')
        erroInputs(emailInput,"input-register-erro")
        return false;
    }
    else if(senha === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Senha inválida",'msg-erro')
        erroInputs(emailInput,"input-register")
        erroInputs(senhaInput,"input-register-erro")
        return false
    }
    else if(senha.length < 8){
        mostraMsg("","msg-erro")
        mostraMsg("Presisa der 8 caracteres",'msg-erro')
        erroInputs(senhaInput,"input-register-erro")
        return false
    }
    else{
        mostraMsg("","msg-erro")
        erroInputs(idadeInput,"input-register")
        erroInputs(senhaInput,"input-register")
        erroInputs(generoSelect,"input-register")
        erroInputs(emailInput,"input-register")
        erroInputs(nomeInput,"input-register")
    }
    return true;
}