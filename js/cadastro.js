const emailInput = document.getElementById('input_email');
const senhaInput = document.getElementById('input_senha');
const btn = document.getElementById('btn');
const alert = document.getElementById('alert-msg').innerHTML;

btn.addEventListener("click", (event) => {
    event.preventDefault()

    email = emailInput.value;
    senha = senhaInput.value;

    if (email == "" || senha == ""){
        mostraMsg("red","Preecha todos os campos")
        console.log("campo vazio");
    }
    else{
        validarEmail(email)
    }

    function mostraMsg(y,a){
        document.getElementById('alert-msg').innerHTML = a
        document.getElementById('alert-msg').style.color = y
        setTimeout(() => {
            mostraMsg("","")
        }, 7000);
    }

    function validarEmail(x){
        var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        var resul  = emailPattern.test(x);
        console.log("validando email...");

        if (resul == true){
            console.log("email escrito certo!");
            validarUser()
        }
        else{
            mostraMsg("red","Email errado")
            console.log("email escrito errado")
        }
    }

    function validarUser(){
        const user_dados = JSON.stringify({
            email:email,
            senha:senha,
        })
        const emailLocal = JSON.parse(localStorage.getItem('user'))

        localStorage.setItem('user',user_dados)

        if(localStorage.getItem('user') == null){
            localStorage.setItem('user',user_dados)
        }
        else{
            if (email == Object.entries(emailLocal)[0][1]){
                mostraMsg("red","Usuario já cadastrado")
                console.log("usuario ja existente");
                console.log("======================================");
                
            }
            else{
                localStorage.setItem('user',user_dados)
                mostraMsg("green","Usuario Cadastrado com sucesso!!")
                console.log("usuario cadastrado");
                location.href = "/index.html"
                console.log("======================================");
            }
        }
        
        
    }})