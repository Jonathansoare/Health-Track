$(function() {

    function validateCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

    jQuery.validator.addMethod("validarCPF",(value,element) =>{
        if(validateCPF(value)){
            return true
        }else{
            return false
        }
    }, "CPF Inválido")


    $("#form-perfil").submit(function (event) {
        event.preventDefault()
    }).validate({
        rules: {
            nome: {
                required: true,
            },
            idade: {
                required: true,
                number: true
            },
            cpf: {
                required:true,
                validarCPF:true
            },
            genero:{
                required:true,
            },
            email: {
                required: true,
                email:true
            },
            password: {
                required: true,
            },
            ConfirmarSenha: {
                required: true,
                equalTo: "#password"
            },
        },
        submitHandler: function (form) {
            Swal.fire({
                title: 'Quer salvar as mudanças?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Salvar',
                denyButtonText: `Nao salve.`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Salvou!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Cancelado!', '', 'error')
                }
              })
        }
    });
})