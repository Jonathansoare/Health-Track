const ativiadeNome = document.getElementById('ative')
const atividadeTime = document.getElementById('time')
const atividadeDate = document.getElementById('date')
const formInput = document.getElementById('dynamic-content').innerHTML
const abri_tela = document.getElementById('abri-pressao')
const btn = document.getElementById('cadastra-pressao')

btn.addEventListener("click", (el) => {
    el.preventDefault()

    const pressao = pressaoInput.value;
    const date = pressaodate.value;

    console.log(pressao);
    console.log(date);
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