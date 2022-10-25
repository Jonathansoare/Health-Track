const emailInput = document.getElementById('input-email');
const senhaInput = document.getElementById('input_senha');
const btn = document.getElementById('btn');
const alert = document.getElementById('alert-msg').innerHTML;
const nomeInput = document.getElementById('nome')
const idadeInput = document.getElementById('idade')
const generoSelect = document.getElementById('genero')


btn.addEventListener("click", (event) => {
    event.preventDefault()
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const genero = generoSelect.value;
    const email = emailInput.value;
    const senha = senhaInput.value;


    const dados  = Object.keys(localStorage)
    //console.log(Object.entries(mylocal)[0][1].email);
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
        cadastraUser(nome,idade,genero,email,senha)
    }
    else{
        console.log('nao cadastrado!');
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
        erroInputs(nomeInput,"input-register")
        erroInputs(idadeInput,"input-register-erro")
        return false
    }
    else if(genero === "seleciona"){
        mostraMsg("","msg-erro")
        mostraMsg("Selecione um Genero",'msg-erro')
        erroInputs(nomeInput,"input-register")
        erroInputs(idadeInput,"input-register")
        erroInputs(generoSelect,"input-register-erro")
        return false
    }
    else if(email === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Email inválido",'msg-erro')
        erroInputs(nomeInput,"input-register")
        erroInputs(idadeInput,"input-register")
        erroInputs(generoSelect,"input-register")
        erroInputs(emailInput,"input-register-erro")
        return false
    }
    else if (validarEmail(email) !== true){
        mostraMsg("","msg-erro")
        mostraMsg("Por favor, forneça um endereço de email válido.",'msg-erro')
        erroInputs(nomeInput,"input-register")
        erroInputs(idadeInput,"input-register")
        erroInputs(generoSelect,"input-register")
        erroInputs(emailInput,"input-register-erro")
        return false;
    }
    else if(senha === ""){
        mostraMsg("","msg-erro")
        mostraMsg("Senha inválida",'msg-erro')
        erroInputs(nomeInput,"input-register")
        erroInputs(idadeInput,"input-register")
        erroInputs(generoSelect,"input-register")
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

function cadastraUser(nome,idade,genero,email,senha){
    const mylocal = JSON.stringify(localStorage.getItem(''))
    if(localStorage == undefined){
        
    }

    // [0]-dadosPessoais [1]-dadosPeso [2]-pressao [3]-atividade [4]-alimentos [5]-dashboard
    const user = JSON.stringify({
        dadosPessoais:{
            nome:nome,
            email:email,
            idade:idade,
            genero:genero,
            senha:senha
        },
        dadosPeso:{
            peso:Object.entries(mylocal)[1][1].peso || null,
            altura:Object.entries(mylocal)[1][1].altura || null,
            data:Object.entries(mylocal)[1][1].data || null,
        },
        pressao:{
            data:Object.entries(mylocal)[2][1].data || null,
            pressao:Object.entries(mylocal)[2][1].pressao || null,
        },
        atividade:{
            data:Object.entries(mylocal)[3][1].data || null,
            tipo:Object.entries(mylocal)[3][1].tipo || '',
            duracao:Object.entries(mylocal)[3][1].duracao || null,
        },
        alimento:{
            data: null,
            ultimo_alimento: '',
            calorias: null
        },
        dashboard:{
            porcentagem_peso: null,
            porcentagem_pressao: null,
            imc: null,
            porcentagem_imc:null
        }


    }) 
    const id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    const emailLocal = JSON.parse(localStorage.getItem('user'))
    if(Object.entries(emailLocal)[0][1].email === email){
        mostraMsg("Usuario ja cadastrado",'msg-erro')
    }else{
        localStorage.setItem("user",user)  
        mostraMsg("Usuario cadastrado com sucesso!",'msg')
    }
    }

    

/*
$(document).ready(function(){
        
    $("#form-register").validate({
        rules: {
            "nome": {
            required: true,
            maxLength:50,
            minLength:2
            },
            "idade":{
            required:true,
            min:1,
            min:120
            },
            "input-email":{
            required:true,
            email:true
            },
        },
        submitHandler:function(form){
            alert("Formulario enviado com sucesso!")()
        }
})}*/