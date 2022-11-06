const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
function listaTabela(){
    const pesoMylocal =  (mylocal).peso;
    const alturaMylocal =  (mylocal).altura;
    const dataMylocal =  (mylocal).data
    const porcePesoIndese = document.getElementById('porce-peso-ds').innerHTML
    
    boxPeso()
    boxPressao()
    boxImc()
    boxAtividade()
}
listaTabela()


function boxPeso(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pesoInput = document.getElementById('peso')
    const peso = pesoInput.value
    const valuePeso = document.getElementById('value-peso-ds')
    const indesePorcePesoUp = document.getElementById('porce-peso-ds-up')
    const indesePorcePesoDn = document.getElementById('porce-peso-ds-dn')
    const indesePorcePeso = document.getElementById('porce-peso-ds')
    const valuePorcePeso = document.getElementById('value-porce-peso')
    const pesoAntigo =  10//Object.entries(mylocal)[1][1].peso;
    const pesoNovo = 10;
    const porcentagem = pesoNovo / pesoAntigo - 1
    const porceFinal = (porcentagem * 100).toFixed(2)

    if(pesoAntigo === null || pesoAntigo === 0){
        valuePorcePeso.innerHTML = "0%"
        if(pesoNovo === "" || pesoNovo === 0){
            valuePeso.innerHTML = pesoAntigo + "Kg"
        }
        else{
            valuePeso.innerHTML = pesoNovo + "Kg"
        }
    }
    else{
        valuePeso.innerHTML = pesoNovo + "Kg"
        valuePorcePeso.innerHTML = porceFinal + "%"
    }
    if(porceFinal > 0){
        indesePorcePeso.style.display = "none"
        indesePorcePesoUp.style.display = "block"
        valuePorcePeso.style.color = "green"
    }
    else if(porceFinal === 0 ){
        indesePorcePeso.style.display = "block"
        indesePorcePesoUp.style.display = "none"
        valuePorcePeso.style.color = "white"
    }
    else if(porceFinal < 0){
        indesePorcePeso.style.display = "none"
        indesePorcePesoDn.style.display = "block"
        valuePorcePeso.style.color = "red"
    }
}

function boxPressao(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pesoInput = document.getElementById('peso')
    const peso = pesoInput.value
    const indesePorcePressaoUp = document.getElementById('porce-pressao-ds-up')
    const indesePorcePressaoDn = document.getElementById('porce-pressao-ds-dn')
    const indesePorcepressao = document.getElementById('porce-pressao-ds')
    const valuePressao = document.getElementById('value-pressao-ds')
    const valuePorcePressao = document.getElementById('value-porce-pressao')
    const pressaoAntigo =  120//Object.entries(mylocal)[1][1].peso;
    const pressaoNovo = 121;

    const porcentagem = pressaoNovo / pressaoAntigo - 1
    const porceFinal = (porcentagem * 100).toFixed(2)

    if(pressaoAntigo === null || pressaoAntigo === 0){
        valuePorcePressao.innerHTML = "0%"
        if(pressaoNovo === "" || pressaoNovo === 0){
            valuePressao.innerHTML = pressaoAntigo + "MMC"
        }
        else{
            valuePressao.innerHTML = pressaoNovo + "MMC"

        }
    }
    else{
        valuePressao.innerHTML = pressaoNovo + "MMC"
        valuePorcePressao.innerHTML = porceFinal + "%"
    }
    if(porceFinal > 0){
        indesePorcepressao.style.display = "none"
        indesePorcePressaoUp.style.display = "block"
        valuePorcePressao.style.color = "green"
    }
    else if(porceFinal === 0 ){
        indesePorcepressao.style.display = "block"
        indesePorcePressaoUp.style.display = "none"
        valuePorcePressao.style.color = "white"
    }
    else if(porceFinal < 0){
        indesePorcepressao.style.display = "none"
        indesePorcePressaoDn.style.display = "block"
        valuePorcePressao.style.color = "red"
    }
}

function boxImc(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const pesoInput = document.getElementById('peso')
    const peso = pesoInput.value
    const indesePorceImcUp = document.getElementById('porce-imc-ds-up')
    const indesePorceImcDn = document.getElementById('porce-imc-ds-dn')
    const indesePorceImc = document.getElementById('porce-imc-ds')
    const valueImc = document.getElementById('value-imc-ds')
    const valuePorceImc = document.getElementById('value-porce-imc')
    const imcAntigo =  21.87//Object.entries(mylocal)[1][1].peso;
    const imcNovo = 21.45;
    const porcentagem = imcNovo / imcAntigo - 1
    const porceFinal = (porcentagem * 100).toFixed(2)

    if(imcAntigo === null || imcAntigo === 0){
        valuePorceImc.innerHTML = "0%"
        if(imcNovo === "" || imcNovo === 0){
            valueImc.innerHTML = imcAntigo
        }
        else{
            valueImc.innerHTML = imcNovo
        }
    }
    else{
        valueImc.innerHTML = imcNovo
        valuePorceImc.innerHTML = porceFinal
    }
    if(porceFinal > 0){
        indesePorceImc.style.display = "none"
        indesePorceImcUp.style.display = "block"
        valuePorceImc.style.color = "green"
    }
    else if(porceFinal === 0 ){
        indesePorceImc.style.display = "block"
        indesePorceImcUp.style.display = "none"
        valuePorceImc.style.color = "white"
    }
    else if(porceFinal < 0){
        indesePorceImc.style.display = "none"
        indesePorceImcDn.style.display = "block"
        valuePorceImc.style.color = "red"
    }
}

function boxAtividade(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const atividadeMylocal = Object.entries(mylocal)[3][1].tipo
    const atividade = document.getElementById('atividade-ds')
    const dataMylocal = Object.entries(mylocal)[3][1].data
    const data = document.getElementById('date-atividade-ds')

    if(atividadeMylocal === ""){
        atividade.innerHTML = "Sem atividade"
        data.innerHTML = "Sem data"
    }
}