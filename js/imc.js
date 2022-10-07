const mylocal = JSON.parse(localStorage.getItem('user'));
const imc_value_imc = document.getElementById('span-imc');
const imc_indese_imc = document.getElementById('indese-imc');
const altura = Object.entries(mylocal)[6][1];
const peso = Object.entries(mylocal)[5][1];

function calcularIMC(x,y) {
    const imc = y / (x * x)
    const resul = imc.toFixed(2)
    const imc_indese = ""
    
    
    document.getElementById('span-imc').innerHTML = resul + " -"

    if(imc < 18.6){
        document.getElementById('indese-imc').innerHTML = "Abaixo do peso"

        const imc_indese = "Abaixo do peso"
    }
    else if(imc >= 18.6 && imc < 24.9){
        document.getElementById('indese-imc').innerHTML = "Normal"

        const imc_indese = "Normal"
    }
    else{
        document.getElementById('indese-imc').innerHTML = "Excesso de peso"

        const imc_indese = "Excesso de peso"
    }
	
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
        IMC:imc,
        IMC_indese:imc_indese 
    })
    localStorage.setItem('user',user_dados)
    console.log(Object.entries(mylocal));

}

calcularIMC(altura,peso)