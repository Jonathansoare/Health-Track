const pesoInput = document.getElementById('peso')
const alturaInput = document.getElementById('altura')
const btn = document.getElementById('btn_cadastra-peso')
const formInput = document.getElementById('dynamic-content').innerHTML
const btn_abri_tela = document.getElementById('button-abrir-cadastro')

btn.addEventListener("click", (el) => {
    el.preventDefault()
    const peso = pesoInput.value
    const altura = alturaInput.value

    if (peso == "" && altura == ""){
        mostraMsg("red","Preecha todos os campos")
    }
    else{
        const mylocal = JSON.parse(localStorage.getItem('user'))
       console.log( Object.entries(mylocal))

        const user_dados = JSON.stringify({
            email:Object.entries(mylocal)[0][1],
            senha:Object.entries(mylocal)[1][1],
            nome:Object.entries(mylocal)[2][1],
            idade:Object.entries(mylocal)[3][1],
            genero:Object.entries(mylocal)[4][1],
            peso:peso,
            altura:altura,
        })
        localStorage.setItem('user',user_dados)
        mostraMsg("green","Novo peso cadastrado com sucesso!")
        console.log(Object.entries(mylocal));
    }
    
})

function amostraform(){
    if(document.getElementById('dynamic-content').style.display == "block"){
        document.getElementById('dynamic-content').style.display = "none"
    }
    else{
        document.getElementById('dynamic-content').style.display = "block"
    }
}

function mostraMsg(y,a){
    document.getElementById('alert-msg').innerHTML = a
    document.getElementById('alert-msg').style.color = y
    setTimeout(() => {
        mostraMsg("","")
    }, 7000);
}
