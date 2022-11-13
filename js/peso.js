const pesoInput = document.getElementById('peso')
const alturaInput = document.getElementById('altura')
const btn = document.getElementById('btn_cadastra-peso')
const formcadastro = document.getElementById('dynamic-content-cadastro').innerHTML
const formVizul = document.getElementById('dynamic-content-vizu')
const btn_abri_tela = document.getElementById('button-abrir-cadastro')
const dataVizul = document.getElementById('date-vizul').innerHTML
const pesoVizul = document.getElementById('peso-vizul').innerHTML
const alturaVizul = document.getElementById('altura-vizul').innerHTML
//const btn_abri_tela_vizul = document.getElementById('button-abrir-vizul')

btn.addEventListener("click", (el) => {
    el.preventDefault()
    const peso = pesoInput.value
    const altura = alturaInput.value

    if(peso === ""){
        mostraMsg("Peso invalido",'msg-erro')
    }
    else if(altura === ""){
        mostraMsg("Altura invalida",'msg-erro')
    }
    else{
        cadastraPeso(peso,altura)
    }

})


function listaTabela(){
    // [0]-dadosPessoais [1]-dadosPeso [2]-pressao [3]-atividade [4]-alimentos [5]-dashboard
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pesoMylocal = (mylocal).peso;
    const alturaMylocal = (mylocal).altura;
    const dataMylocal = (mylocal).data
    
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
        document.getElementById('peso-vizul').innerHTML = (mylocal).peso;
        document.getElementById('altura-vizul').innerHTML = (mylocal).altura;
        document.getElementById('date-vizul').innerHTML = (mylocal).dataPeso;
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
            document.getElementById('dynamic-content-vizul').style.display = "block"
        }, 1000);
        
    })

}

function apagar(){  
}

function calcularIMC(y,x) {
    const mylocal = JSON.parse(localStorage.getItem('user'));
    const imc = y / (x * x)
    const imcResul = Number(imc.toFixed(2))
   
    return imcResul
}

function indeseImc(imc){
    const nivel = ['Abaixo do Peso','peso normal','sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
    
}

function porcentagemImc(peso,altura){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const imcAntigo = mylocal.imc;
    if(imcAntigo === null || imcAntigo === 0){
        return 0
    }
    else if (imcAntigo > 0){
        console.log(imcAntigo);
        const imcNovo = calcularIMC(peso,altura);
        const porcentagem = imcNovo / imcAntigo - 1
        const porceFinal = (porcentagem * 100).toFixed(2)
        return porceFinal
    }
    

}

function porcentagemPeso(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const peso = pesoInput.value

    const pesoAntigo = mylocal.peso
    const pesoNovo = peso

    if(pesoAntigo === null){
        pesoAntigo = 0
    }

    const porcentagem = pesoNovo / pesoAntigo -1
    const porceFinal = (porcentagem * 100).toFixed(2)
    return porceFinal
}

function cadastraPeso(peso,altura){
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
        peso:peso,
        altura:altura,
        dataPeso:dia+'/'+diaMes+'/'+ano,
        dataPressao:mylocal.dataPressao,
        pressao:mylocal.pressao,
        dataAtividade:mylocal.dataAtividade,
        tipo:mylocal.tipo,
        duracao:mylocal.duracao,
        dataAlimento: mylocal.data,
        ultimo_alimento: mylocal.ultimo_alimento,
        calorias: mylocal.calorias,
        porcentagem_peso: porcentagemPeso(),
        porcentagem_pressao: mylocal.porcentagem_pressao,
        imc: calcularIMC(peso,altura),
        porcentagem_imc:porcentagemImc(peso,altura),
        indese:indeseImc(calcularIMC(peso,altura))
    })
    localStorage.setItem('user',user)
    mostraMsg("Peso cadastrado com sucesso!",'msg')
    setTimeout(() => {
        AmostraFormVizul()
    }, 3000);
    }