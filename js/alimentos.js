const alimentacaoInput = document.getElementById('alimentos')
const caloriasInput = document.getElementById('calorias')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')
const alert = document.getElementById('alert-msg')

const mylocal = JSON.parse(localStorage.getItem('user'))
console.log(Object.entries(mylocal));
btn.addEventListener("click", (el) => {
    el.preventDefault()

    const alimentos = alimentacaoInput.value;
    const calorias = caloriasInput.value;

    if (alimentos == "" && calorias == ""){
        mostraMsg("red","Preecha todos os campos")
    }
    else{
        const mylocal = JSON.parse(localStorage.getItem('user'))
        console.log(Object.entries(mylocal));
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
            calorias:calorias
        })
        localStorage.setItem('user',user_dados)
        mostraMsg("green","Novo peso cadastrado com sucesso!")
    }})
function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    
    document.getElementById('date-vizul').innerHTML = Object.entries(mylocal)[13][1]
    document.getElementById('alimentos_vizul').innerHTML = Object.entries(mylocal)[14][1]
    document.getElementById('calorias-vizul').innerHTML = Object.entries(mylocal)[15][1]
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
        document.getElementById('dynamic-content-cadastro').style.display = "none"

        setTimeout(() => {
            AmostraFormVizul()
        }, 2000);
        
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