function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'));

    if(Object.entries(mylocal)[16][01] == null){
        document.getElementById('imc-ds').innerHTML = "Sem IMC";
        console.log("Sem IMC");
        document.getElementById('imc-indese-ds').innerHTML = ""
    }
    else{
        document.getElementById('imc-ds').innerHTML = Object.entries(mylocal)[16][1]
        document.getElementById('imc-indese-ds').innerHTML = Object.entries(mylocal)[17][1]
    }
    if(Object.entries(mylocal)[18][1] > 0){
        document.getElementById('porce-peso').innerHTML = Object.entries(mylocal)[18][1] + "%"
        document.getElementById('porce-peso').style.color = "green"
        document.getElementById('porce-peso-ds').style.color = "green"
    }
    else{
        document.getElementById('porce-peso').innerHTML = Object.entries(mylocal)[18][1] + "%"
        document.getElementById('porce-peso').style.color = "red"
        document.getElementById('porce-peso-ds').style.color = "red"
        document.getElementById('porce-peso-ds').style.transform = "rotate(180deg)"
    }
    document.getElementById('peso-ds').innerHTML = Object.entries(mylocal)[5][1] + "Kg"
    document.getElementById('pressao-ds').innerHTML = Object.entries(mylocal)[8][1] + "MMC"
    document.getElementById('atividade-ds').innerHTML = Object.entries(mylocal)[10][1]
    document.getElementById('date-atividade-ds').innerHTML = Object.entries(mylocal)[12][1]    
    }

listaTabela()

