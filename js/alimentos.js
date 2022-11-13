const alimentacaoInput = document.getElementById('alimentos')
const caloriasInput = document.getElementById('calorias')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')
const alert = document.getElementById('alert-msg')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const alimentos = alimentacaoInput.value;
    const calorias = caloriasInput.value;

    if (alimentos == ""){
        mostraMsg("Alimento invalido",'msg-erro')
    }
    else if( calorias === ''){
        mostraMsg("Caloria invalida")
    }
    else{
        cadastraAlimento(alimentos,calorias)
    }
    })
function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const alimentoMylocal =  (mylocal).ultimo_alimento;
    const caloriasMylocal =  (mylocal).calorias;
    const dataMylocal =  (mylocal).dataAlimento
    
    if(alimentoMylocal === ""){
        document.getElementById('alimentos-vizul').innerHTML = "Sem alimentos"
    }
    if(caloriasMylocal === ''){
        document.getElementById('calorias-vizul').innerHTML = "Sem calorias"
    }
    if(dataMylocal === null){
        document.getElementById('date-vizul').innerHTML = "Sem data"
    }
    else{
        document.getElementById('peso-vizul').innerHTML = ( mylocal).alimentos;
        document.getElementById('altura-vizul').innerHTML =  (mylocal).calorias;
        document.getElementById('date-vizul').innerHTML =  (mylocal).dataAlimennto;
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
        data: Object.entries(mylocal)[7][1],
        pressao:Object.entries(mylocal)[8][1],
        data_pressao:Object.entries(mylocal)[9][1],
        atividade:Object.entries(mylocal)[10][1],
        time_atividade:Object.entries(mylocal)[11][1],
        data_atividade:Object.entries(mylocal)[12][1],
        data_alimento:"Sem Data",
        alimentos:"Sem alimento",
        calorias:"Sem calorias",
    })
    localStorage.setItem('user',user_dados)
}

function cadastraAlimento(alimento,calorias){
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
        dataAtividade:mylocal.data,
        tipo:mylocal.tipo,
        duracao:mylocal.duracao,
        dataAlimento:dia+'/'+diaMes+'/'+ano ,
        ultimo_alimento:alimento,
        calorias:calorias,
        porcentagem_peso:mylocal.porcentagem_peso,
        porcentagem_pressao:mylocal.porcentagem_pressao,
        imc: mylocal.imc,
        porcentagem_imc:mylocal.porcentagem_imc,
        indese:mylocal.indese
    })
    localStorage.setItem('user',user)
    mostraMsg("Pressao cadastrada com sucesso!",'msg')
    setTimeout(() => {
        AmostraFormVizul()
    }, 3000);
}