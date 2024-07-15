    $(document).ready(function() {
        $('#telefone').mask('(00) 00000-0000');
        $('#contato-form').validate({
            rules: {
                nome: "required",
                email: {
                    required: true,
                    email: true
                },
                telefone: "required",
                mensagem: "required"
            },
            messages: {
                nome: "Por favor, insira seu nome",
                email: {
                    required: "Por favor, insira seu E-mail válido"
                },
                telefone: "Por favor, insira seu telefone",
                Mensagem: "Por favor, insira sua mensagem"
            },
            submitHandler: function(form) {
                alert("Formulário enviado com sucesso!");
                form.submit();
            }
        });
    });