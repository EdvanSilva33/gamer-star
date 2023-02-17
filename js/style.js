$(document).ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();

    });
   
    $('#telefone').mask('(00) 00000-0000 ', { placeholder: "(00) 00000-0000" });
    $('#cpf').mask('000.000.000-00', { reverse: true, placeholder:'000.000.000-00' });
    $('#cep').mask('00.000-000', {placeholder:'00.000-000'} );

    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,

            },
         
            email: {
                required: true

            },
            telefone: {
                required: true,

            },
          
            
        },
        messages: {

            nome: {
                required: '<span class="mensagem-error">O nome e obrigatorio!</span>',
                minlength: jQuery.validator.format('<span class="mensagem-error">No minimo {0} characteres!!</span>')
            },

            sobrenome: {
                required: '<span class="mensagem-error">O sobre nome é obrigatorio!</span>',
                minlength: jQuery.validator.format('<span class="mensagem-error">No minimo {0} characteres!!</span>')
            },
            email: {
                required: '<span class="mensagem-error">Campo de preenchimento obrigatório.</span>',
                email: '<span class="mensagem-error">Introduza um e-mail valido!</span>'

            },
            telefone: {
                required: '<span class="mensagem-error">Campo de preenchimento obrigatório.</span>'
            },
            

        },


        submitHandler: function (form) {
            form.submit();
            alert('Mensagem enviada com sucesso!')
        },


        invalidHandler: function (e, validate) {
            let camposFaltando = validate.numberOfInvalids();
            if (camposFaltando) {
                alert(`existem ${camposFaltando} campos incorretos`)
            }
        }
    })
});