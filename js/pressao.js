const pressaoInput = document.getElementById('pressao')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const pressao = pressaoInput.value

    if(pressao == ""){
        mostraMsg("Pressão invalida",'msg-erro')
    }
    else{
        cadastraPressao(pressao)
    }
})


function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pressaoMylocal = (mylocal).pressao;
    const dataMylocal = (mylocal).dataPressao

    if(pressaoMylocal === null){
        document.getElementById('pressao-vizul').innerHTML = "Sem pressão"
    }
    if(dataMylocal === null){
        document.getElementById('date-vizul').innerHTML = "Sem data"
    }
    else{
        document.getElementById('pressao-vizul').innerHTML = (mylocal).pressao + "MMC";
        document.getElementById('date-vizul').innerHTML = (mylocal).dataPressao;
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

    const user_dados = JSON.stringify({
        email:Object.entries(mylocal)[0][1],
        senha:Object.entries(mylocal)[1][1],
        nome:Object.entries(mylocal)[2][1],
        idade:Object.entries(mylocal)[3][1],
        genero:Object.entries(mylocal)[4][1],
        peso: Object.entries(mylocal)[5][1],
        altura: Object.entries(mylocal)[6][1],
        data: Object.entries(mylocal)[7][1],
        pressao:"Sem pressao",
        data_pressao:"Sem data",
        atividade:Object.entries(mylocal)[10][1],
        time_atividade:Object.entries(mylocal)[11][1],
        data_atividade:Object.entries(mylocal)[12][1],
        data_alimento:Object.entries(mylocal)[13][1],
        alimentos:Object.entries(mylocal)[14][1],
        calorias:Object.entries(mylocal)[15][1],
    })
    localStorage.setItem('user',user_dados)
}

function porcentagemPressao(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pressaoNovo = pressaoInput.value
    const pressaoAntiga = mylocal.pressao;

    if(pressaoAntiga === null){
        return 00
    }else{
        const porcentagem = pressaoNovo / pressaoAntiga -1
        const porceFinal = (porcentagem * 100).toFixed(2)
        console.log(porcentagem);
        return porceFinal
    }
}

function cadastraPressao(pressao){
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
        dataPressao:dia+'/'+diaMes+'/'+ano,
        pressao:pressao,
        dataAtividade:mylocal.dataAtividade,
        tipo:mylocal.tipo,
        duracao:mylocal.duracao,
        dataAlimento: mylocal.dataAlimento,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso:mylocal.porcentagem_peso,
        porcentagem_pressao:porcentagemPressao(),
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese
    })
    localStorage.setItem('user',user)
    mostraMsg("Pressao cadastrada com sucesso!",'msg')
    setTimeout(() => {
        document.getElementById('dynamic-content-cadastro').style.display = "none"
        AmostraFormVizul()
    }, 1000);
}