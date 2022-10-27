const mylocal = JSON.parse(localStorage.getItem('user'))
const dados = JSON.parse(localStorage.getItem('user'))
function listaTabela(){
    const pesoMylocal = Object.entries(dados)[1][1].peso;
    const alturaMylocal = Object.entries(dados)[1][1].altura;
    const dataMylocal = Object.entries(dados)[1][1].data
    const porcePesoIndese = document.getElementById('porce-peso-ds')
    
    if(pesoMylocal === null){
        document.getElementById('peso-ds').innerHTML = "00Kg"
        document.getElementById('porce-peso').innerHTML = "00%"
        porcePesoIndese.classList.add('fa-ligth fa-angle-up')
    }
    else{

    }}
listaTabela()

/*
porcentagem()

function porcentagem(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pesoInput = document.getElementById('peso')
    const peso = pesoInput.value

    const pesoAntigo = Object.entries(mylocal)[1][1].peso   
    const pesoNovo = peso

    if(pesoNovo > pesoAntigo){
        document.getElementById('porce-peso').innerHTML = Object.entries(mylocal)[18][1] + "%"
        document.getElementById('porce-peso').style.color = "blue"
        document.getElementById('porce-peso-ds').style.color = "green"
    }
    else{
        document.getElementById('porce-peso').innerHTML = Object.entries(mylocal)[18][1] + "%"
        document.getElementById('porce-peso').style.color = "red"
        document.getElementById('porce-peso-ds').style.color = "red"
        document.getElementById('porce-peso-ds').style.transform = "rotate(180deg)"
    }
}*/