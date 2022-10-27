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

    if (alimentos == "" || calorias == ""){
        mostraMsg("red","Preecha todos os campos")
    }
    else{
        const mylocal = JSON.parse(localStorage.getItem('user'))
       const timeElapsed = Date.now()
       const today = new Date(timeElapsed)

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
            atividade:Object.entries(mylocal)[10][1],
            time_atividade:Object.entries(mylocal)[11][1],
            data_atividade:Object.entries(mylocal)[12][1],
            data_alimento:today.toLocaleDateString(),
            alimentos:alimentos,
            calorias:calorias,
            IMC:Object.entries(mylocal)[16][1],
            imc_indese: Object.entries(mylocal)[17][1],
        })
        localStorage.setItem('user',user_dados)
        mostraMsg("green","Novo alimento cadastrado com sucesso!")
    }})
function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
    const alimentoMylocal = Object.entries(dados)[4][1].ultimo_alimento;
    const caloriasMylocal = Object.entries(dados)[4][1].calorias;
    const dataMylocal = Object.entries(dados)[4][1].data
    
    if(alimentoMylocal === ""){
        document.getElementById('alimentos-vizul').innerHTML = "Sem alimentos"
    }
    if(caloriasMylocal === null){
        document.getElementById('calorias-vizul').innerHTML = "Sem calorias"
    }
    if(dataMylocal === null){
        document.getElementById('date-vizul').innerHTML = "Sem data"
    }
    else{
        document.getElementById('peso-vizul').innerHTML = Object.entries(dados)[4][1].alimentos;
        document.getElementById('altura-vizul').innerHTML = Object.entries(dados)[4][1].calorias;
        document.getElementById('date-vizul').innerHTML = Object.entries(dados)[4][1].data;
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
function mostraMsg(y,a){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').style.color = y
    setTimeout(() => {
        mostraMsg("","")
    }, 7000);
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