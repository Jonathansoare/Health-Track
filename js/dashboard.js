const btndashboard = document.getElementById('button-dashboard');
const btnPerfil = document.getElementById('button-perfil');
const btnPeso = document.getElementById('button-gerencia-peso');

const formdashboard = document.getElementById('main-content-dashboard').innerHTML
const formPeso = document.getElementById('main-content-peso').innerHTML
const formPerfil = document.getElementById('main-content-perfil').innerHTML
const formPressao = document.getElementById('main-content-gerencia-pressao').innerHTML
const formAtividade = document.getElementById('main-content-gerencia-atividade').innerHTML
const formAlimento = document.getElementById('main-content-gerencia-alimento').innerHTML
const formImc = document.getElementById('main-content-imc');


function mostraTela(){
    document.getElementById('main-content-dashboard').style.display = "none"
    document.getElementById('main-content-imc').style.display = "block"

}