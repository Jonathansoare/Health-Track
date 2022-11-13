const mylocal = JSON.parse(localStorage.getItem('user'));


function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
    const imcMylocal =  (mylocal).imc;
    const indeseMylocal =  (mylocal).indese
    
    if(imcMylocal === null){
        document.getElementById('span-imc').innerHTML = "Sem IMC"
    }
    if(indeseMylocal === ""){
        document.getElementById('indese-imc').innerHTML =""
    }
    else{
        document.getElementById('span-imc').innerHTML =  (mylocal).imc + " -";
        document.getElementById('indese-imc').innerHTML = (mylocal).indese;
    }
}
listaTabela()

