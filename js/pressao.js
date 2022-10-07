const pressaoInput = document.getElementById('pressao')
const formInput = document.getElementById('dynamic-content-cadastro').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const pressao = pressaoInput.value

    if(pressao == ""){
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
            data: Object.entries(mylocal)[7][1],
            pressao:pressao,
            data_pressao:today.toLocaleDateString(),
            atividade:Object.entries(mylocal)[10][1],
            time_atividade:Object.entries(mylocal)[11][1],
            data_atividade:Object.entries(mylocal)[12][1],
            data_alimento:Object.entries(mylocal)[13][1],
            alimentos:Object.entries(mylocal)[14][1],
            calorias:Object.entries(mylocal)[15][1],
        })
        localStorage.setItem('user',user_dados)
        mostraMsg("green","Nova pressão cadastrada com sucesso!")
        console.log(Object.entries(mylocal));
    }})
function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    console.log(Object.entries(mylocal));
    document.getElementById('date-vizul').innerHTML = Object.entries(mylocal)[9][1]
    document.getElementById('pressao-vizul').innerHTML = Object.entries(mylocal)[8][1]
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