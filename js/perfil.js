const emailInput = document.getElementById('input_email');
const senhaInput = document.getElementById('input_senha');
const nomeInput = document.getElementById('inputNome')
const btn = document.getElementById('btn');
const alert = document.getElementById('alert-msg').innerHTML;
const idadeInput = document.getElementById('inputIdade')
const generoSelect = document.getElementById('genero')

btn.addEventListener("click",(el) =>{
    el.preventDefault()

    const email = emailInput.value;
    const senha = senhaInput.value
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const genero = generoSelect.value;


    if(email == "" || senha == "" || nome == "" || idade == "" || genero == ""){
        mostraMsg("red","Preecha todos os campos")
    }
    else{
        editarUser(email,senha,nome,idade,genero)
    }

})

function mostraMsg(y,a){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').style.color = y
    setTimeout(() => {
        mostraMsg("","")
    }, 7000);
}

function editarUser(a,b,c,d,e){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    /*
    const user_dados = JSON.stringify({
        email:a,
        senha:b,
        nome:c,
        idade:d,
        genero:e,
        peso: Object.entries(mylocal)[5][1],
        altura: Object.entries(mylocal)[6][1],
        data: Object.entries(mylocal)[7][1],
        pressao:Object.entries(mylocal)[8][1],
        data_pressao:Object.entries(mylocal)[9][1],
        atividade:Object.entries(mylocal)[10][1],
        time_atividade:Object.entries(mylocal)[11][1],
        data_atividade:Object.entries(mylocal)[12][1],
        data_alimento:Object.entries(mylocal)[13][1],
        alimentos:Object.entries(mylocal)[14][1],
        calorias:Object.entries(mylocal)[15][1],
    })

    localStorage.setItem('user',user_dados)
    mostraMsg("green","Usuario editado com sucesso")*/
}

function mostradados(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    document.getElementById('input-email').value = (mylocal).email
    document.getElementById('input-Nome').value = (mylocal).nome
    document.getElementById('input-Idade').value = (mylocal).idade
    document.getElementById('genero').value = (mylocal).genero
    document.getElementById('input-senha').value = (mylocal).senha
    
}
mostradados()