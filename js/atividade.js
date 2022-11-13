const ativiadeNome = document.getElementById('ative')
const atividadeTime = document.getElementById('time')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const atividade = ativiadeNome.value;
    const time = atividadeTime.value;
    
    if(atividade === ''){
        mostraMsg("Atividade invalida",'msg-erro')
    }
    else if(time === ''){
        mostraMsg("Tempo invalida",'msg-erro')
    }
    else{
        cadastraAtividade(atividade,time)
    }
})

function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const atividadeMylocal = (mylocal).tipo;
    const duracaoMylocal =  (mylocal).duracao;
    const dataMylocal =  (mylocal).dataAtividade
    
    if(atividadeMylocal === ""){
        document.getElementById('atividade-vizul').innerHTML = "Sem atividade"
    }
    if(duracaoMylocal === null){
        document.getElementById('minutos-vizul').innerHTML = "Sem duração"
    }
    if(dataMylocal === null){
        document.getElementById('date-vizul').innerHTML = "Sem data"
    }
    else{
        document.getElementById('atividade-vizul').innerHTML = (mylocal).tipo;
        document.getElementById('minutos-vizul').innerHTML =  (mylocal).duracao;
        document.getElementById('date-vizul').innerHTML = (mylocal).dataAtividade;
    }
    }

function AmostraformCadastro(){
    if(document.getElementById('dynamic-content-vizul').style.display == "block"){
        document.getElementById('dynamic-content-vizul').style.display = "none"
    }
    else{
        if(document.getElementById('dynamic-content-cadastro').style.display == "block"){
            document.getElementById('dynamic-content-cadastro').style.display = "none"
        }
        else{
            document.getElementById('dynamic-content-cadastro').style.display = "block"
        }
    }
    
}

function AmostraFormVizul(){
    if(document.getElementById('dynamic-content-cadastro').style.display == "block"){
        document.getElementById('dynamic-content-cadastro').style.display = "none"
    }
    else{
        if(document.getElementById('dynamic-content-vizul').style.display == "block"){
            document.getElementById('dynamic-content-vizul').style.display = "none"
        }
        else{
            document.getElementById('dynamic-content-vizul').style.display = "block"
            listaTabela()
}}}

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

function editar(){
    AmostraformCadastro()
    document.getElementById('dynamic-content-cadastro').style.display = "block"
    btn.addEventListener("click", (el) => {
        el.preventDefault()
        setTimeout(() => {
            document.getElementById('dynamic-content-cadastro').style.display = "none"
            AmostraFormVizul()
        }, 1000);
        
    })

}
function apagar(){
    const mylocal = JSON.parse(localStorage.getItem('user'))

    document.getElementById('dynamic-content-vizul').style.display = "none"

    const user_dados = JSON.stringify({
        email:Object.entries(mylocal)[0][1],
        senha:Object.entries(mylocal)[1][1],
        nome:Object.entries(mylocal)[2][1],
        idade:Object.entries(mylocal)[3][1],
        genero:Object.entries(mylocal)[4][1],
        peso: Object.entries(mylocal)[5][1],
        altura: Object.entries(mylocal)[6][1],
        data_peso: Object.entries(mylocal)[7][1],
        pressao:Object.entries(mylocal)[8][1],
        data_pressao:Object.entries(mylocal)[9][1],
        atividade:"Sem atividade",
        time_atividade:"Sem Duração",
        data_atividade:"Sem Data",
        data_alimento:Object.entries(mylocal)[13][1],
        alimentos:Object.entries(mylocal)[14][1],
        calorias:Object.entries(mylocal)[15][1],
    })
    localStorage.setItem('user',user_dados)
}

function cadastraAtividade(tipo,duracao){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const data = new Date();
    let dia = data.getDate()
    let ano = data.getFullYear()
    let diaMes = data.getMonth()
    // [0]-dadosPessoais [1]-dadosPeso [2]-pressao [3]-atividade [4]-alimentos [5]-dashboard
    const user = JSON.stringify({
        nome:mylocal.nome,
        idade:mylocal.idade,
        genero:mylocal.genero,
        email:mylocal.email,
        senha:mylocal.senha,
        peso:mylocal.peso,
        altura:mylocal.altura,
        dataPeso:mylocal.dataPeso,
        dataPressao:mylocal.dataPressao,
        pressao:mylocal.pressao,
        dataAtividade:dia+'/'+diaMes+'/'+ano,
        tipo:tipo,
        duracao:duracao,
        dataAlimento: mylocal.dataAlimento,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso:mylocal.porcentagem_peso,
        porcentagem_pressao:mylocal.porcentagem_pressao,
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese
    })
    localStorage.setItem('user',user)
    mostraMsg("Atividade cadastrada com sucesso!",'msg')
    setTimeout(() => {
        AmostraFormVizul()
    }, 3000);
}