$(function() {
    $("#peso-form").submit(function (event) {
        event.preventDefault()
    }).validate({
        rules: {
            peso: {
                required: true,
                number: true
            },
            altura: {
                required: true,
                number: true
            },
        },
        submitHandler: function (form) {
            Swal.fire(
                'Sucesso',
                'Registro realizado com sucesso ',
                'success'
              )
        }
    });
})