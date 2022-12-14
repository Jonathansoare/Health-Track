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
        document.getElementById('minutos-vizul').innerHTML = (mylocal).duracao;
        document.getElementById('date-vizul').innerHTML = (mylocal).dataAtividade;
        document.getElementById('minutos-vizul').innerHTML =  (mylocal).duracao;
        document.getElementById('date-vizul').innerHTML = (mylocal).dataAtividade + ' | ' + (mylocal).horaAtividade;
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
    document.getElementById('alert-msg').classList.remove('msg-erro')
    document.getElementById('alert-msg').classList.remove('msg')
    document.getElementById('alert-msg').classList.add(y)
    setTimeout(() => {
        document.getElementById('alert-msg').innerHTML = ""
        document.getElementById('alert-msg').classList.remove('msg-erro')
        document.getElementById('alert-msg').classList.remove('msg')
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

    const user = JSON.stringify({
        nome:mylocal.nome,
        idade:mylocal.idade,
        genero:mylocal.genero,
        email:mylocal.email,
        senha:mylocal.senha,
        peso:mylocal.peso,
        altura:mylocal.altura,
        dataPeso:mylocal.dataPeso,
        horaPeso:mylocal.horaPeso,
        dataPressao:mylocal.dataPressao,
        horaPressao:mylocal.horaPressao,
        pressao:mylocal.pressao,
        dataAtividade:null,
        horaAtividade:null,
        tipo:'',
        duracao:null,
        dataAlimento: mylocal.data,
        horaAlimento:mylocal.horaAlimento,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso:mylocal.porcentagemPeso,
        porcentagem_pressao: mylocal.porcentagem_pressao,
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese
    })
    localStorage.setItem('user',user)
}

function cadastraAtividade(tipo,duracao){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const data = new Date();
    let dia = data.getDate()
    let ano = data.getFullYear()
    let diaMes = data.getMonth()
    console.log(dia,diaMes,ano);
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
        horaPeso:mylocal.horaPeso,
        dataPressao:mylocal.dataPressao,
        horaPressao:mylocal.horaPressao,
        pressao:mylocal.pressao,
        dataAtividade: dia+'/'+diaMes+'/'+ano,
        horaAtividade:data.toLocaleTimeString(),
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
    mostraMsg("Atividade cadastrada com sucesso",'msg')
    setTimeout(() => {
        document.getElementById('dynamic-content-cadastro').style.display = "none"
        AmostraFormVizul()
    }, 1000);
}

function AmostraPopUpConta(){
    const popUp = document.querySelector('.popup-wrapper')

    popUp.style.display = 'flex'

    document.addEventListener("click", (e) =>{
        const el = e.target

        if(el.classList.contains('popup-close')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('popup-wrapper')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupNao')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupSim')){
            popUp.style.display = 'none'
            apagar()
        }
    })
}
function AmostraPopUp(){
    const popUp = document.querySelector('.popup-wrapper-logount')
    popUp.style.display = 'flex'
    let sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-300px';

    document.addEventListener("click", (e) =>{
        const el = e.target

        if(el.classList.contains('popup-close')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('popup-wrapper-logount')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupNao')){
            popUp.style.display = 'none'
        }
        if(el.classList.contains('btnPopupSim')){
            popUp.style.display = 'none'
            location.href="../index.html" 
        }
    })
}