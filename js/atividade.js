$(function() {

    $('#time_ative').mask("00:00")
    $('#data_ative').mask("00/00/0000")

    $("#form-atividade").submit(function (event) {
        event.preventDefault()
    }).validate({
        rules: {
            ative: {
                required: true,
            },
            time: {
                required: true,
            },
            data: {
                required: true,
            },
        },
        submitHandler: function (form) {
            Swal.fire(
                'Sucesso',
                'Registro realizado com sucesso ',
                'success'
              ).then(() =>{
                $('#ative').val('')
                $('#time_ative').val('')
                $('#data_ative').val('')
              })
        }
    });
})