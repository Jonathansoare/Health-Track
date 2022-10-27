const mylocal = JSON.parse(localStorage.getItem('user'));


function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'))
    const dados = JSON.parse(localStorage.getItem('user'))
    const imcMylocal = Object.entries(dados)[5][1].imc;
    const indeseMylocal = Object.entries(dados)[5][1].indese
    
    if(imcMylocal === null){
        document.getElementById('span-imc').innerHTML = "Sem IMC"
    }
    if(indeseMylocal === ""){
        document.getElementById('indese-imc').innerHTML =""
    }
    else{
        document.getElementById('span-imc').innerHTML = Object.entries(dados)[5][1].imc;
        document.getElementById('indese-imc').innerHTML ="-" + Object.entries(dados)[5][1].indese;
    }
}
listaTabela()

