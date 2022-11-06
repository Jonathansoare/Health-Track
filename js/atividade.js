const ativiadeNome = document.getElementById('ative')
const atividadeTime = document.getElementById('time')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const atividade = ativiadeNome.value;
    const time = atividadeTime.value;
    if (atividade == "" || time == ""){
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
            altura:Object.entries(mylocal)[6][1],
            data: Object.entries(mylocal)[7][1],
            pressao:Object.entries(mylocal)[8][1],
            data_pressao:Object.entries(mylocal)[9][1],
            atividade:atividade,
            time_atividade:time,
            data_atividade:today.toLocaleDateString(),
            data_alimento:Object.entries(mylocal)[13][1],
            alimentos:Object.entries(mylocal)[14][1],
            calorias:Object.entries(mylocal)[15][1],
            IMC:Object.entries(mylocal)[16][1],
            imc_indese: Object.entries(mylocal)[17][1],
        })
        localStorage.setItem('user',user_dados)
        mostraMsg("green","Nova atividade cadastrada com sucesso!")
    }
})

function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const atividadeMylocal = (mylocal).tipo;
    const duracaoMylocal =  (mylocal).duracao;
    const dataMylocal =  (mylocal).data
    
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
        document.getElementById('peso-vizul').innerHTML = (mylocal).alimentos;
        document.getElementById('altura-vizul').innerHTML =  (mylocal).calorias;
        document.getElementById('date-vizul').innerHTML = (mylocal).data;
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