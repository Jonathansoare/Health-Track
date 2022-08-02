$(function() {

    $('#date').mask("00/00/0000")

    $("#pressao-form").submit(function (event) {
        event.preventDefault()
    }).validate({
        rules: {
            pressao: {
                required: true,
                number: true
            },
            data_pressao: {
                required:true
            }
        },
        submitHandler: function (form) {
            Swal.fire(
                'Sucesso',
                'Registro realizado com sucesso ',
                'success'
              ).then(() =>{
                $('#date').val('')
                $('#pressao').val('')
              })
        }
    });
})