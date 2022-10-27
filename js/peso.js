const pesoInput = document.getElementById('peso')
const alturaInput = document.getElementById('altura')
const btn = document.getElementById('btn_cadastra-peso')
const formcadastro = document.getElementById('dynamic-content-cadastro').innerHTML
const formVizul = document.getElementById('dynamic-content-vizu')
const btn_abri_tela = document.getElementById('button-abrir-cadastro')
const dataVizul = document.getElementById('date-vizul').innerHTML
const pesoVizul = document.getElementById('peso-vizul').innerHTML
const alturaVizul = document.getElementById('altura-vizul').innerHTML
const btn_abri_tela_vizul = document.getElementById('button-abrir-vizul')



btn.addEventListener("click", (el) => {
    el.preventDefault()
    const peso = pesoInput.value
    const altura = alturaInput.value

})

function listaTabela(){
    // [0]-dadosPessoais [1]-dadosPeso [2]-pressao [3]-atividade [4]-alimentos [5]-dashboard
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
    const pesoMylocal = Object.entries(dados)[1][1].peso;
    const alturaMylocal = Object.entries(dados)[1][1].altura;
    const dataMylocal = Object.entries(dados)[1][1].data
    console.log(pesoMylocal,dataMylocal,alturaMylocal);
    
    if(pesoMylocal === null){
        document.getElementById('peso-vizul').innerHTML = "Sem peso"
    }
    if(alturaMylocal === null){
        document.getElementById('altura-vizul').innerHTML = "Sem altura"
    }
    if(dataMylocal === null){
        document.getElementById('date-vizul').innerHTML = "Sem data"
    }
    else{
        document.getElementById('peso-vizul').innerHTML = Object.entries(dados)[1][1].peso;
        document.getElementById('altura-vizul').innerHTML = Object.entries(dados)[1][1].altura;
        document.getElementById('date-vizul').innerHTML = Object.entries(dados)[1][1].data;
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
            document.getElementById('dynamic-content-vizul').style.display = "block"
        }, 1000);
        
    })

}

function apagar(){  
}
function calcularIMC(x,y) {
    const mylocal = JSON.parse(localStorage.getItem('user'));
    const imc = y / (x * x)
    const resul = imc.toFixed(2)
    const imc_indese = ""
    
    
    if(imc < 18.6){
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
            data_alimento:Object.entries(mylocal)[13][1],
            alimentos:Object.entries(mylocal)[14][1],
            calorias:Object.entries(mylocal)[15][1],
            IMC:resul,
            imc_indese: "Abaixo do peso",
            porcentagem_peso: Object.entries(mylocal)[18][1],
        })
        localStorage.setItem('user',user_dados)
    }
    else if(imc >= 18.6 && imc < 24.9){
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
            data_alimento:Object.entries(mylocal)[13][1],
            alimentos:Object.entries(mylocal)[14][1],
            calorias:Object.entries(mylocal)[15][1],
            IMC:resul,
            imc_indese: "Normal",
            porcentagem_peso: Object.entries(mylocal)[18][1],
        })
        localStorage.setItem('user',user_dados)
    }
    else{
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
        data_alimento:Object.entries(mylocal)[13][1],
        alimentos:Object.entries(mylocal)[14][1],
        calorias:Object.entries(mylocal)[15][1],
        IMC:resul,
        imc_indese: "Excesso de peso",
        porcentagem_peso: Object.entries(mylocal)[18][1],
    })
    localStorage.setItem('user',user_dados)
    }
}