const mylocal = JSON.parse(localStorage.getItem('user'));


function listaTabela(){
    const mylocal = JSON.parse(localStorage.getItem('user'));

    if(Object.entries(mylocal)[16][01] == null){
        document.getElementById('span-imc').innerHTML = "Sem IMC";
        console.log("Sem IMC");
        document.getElementById('indese-imc').innerHTML = ""
    }
    else{
        document.getElementById('span-imc').innerHTML = Object.entries(mylocal)[16][1]
        document.getElementById('indese-imc').innerHTML = Object.entries(mylocal)[17][1]
    }}
listaTabela()

