$(document).ready(function (){

    //MASCARAS
    $('#validationTooltip03').mask("(00)00000-0000")

   
    //AÇÃO AO CLICAR COM JQUERY
    $('#liveAlertBtn').on("click", function (event) {


        event.preventDefault();

        document.getElementById('alerta').innerHTML = '<div></div>'
    
        //VARIAVEIS
        var nome = document.getElementById('validationTooltip01').value;
        var email = document.getElementById('validationTooltip02').value;
        var telefone = document.getElementById('validationTooltip03').value;
        console.log(nome, email, telefone);
    
        //IF SE FOR DIFERENTE DE VAZIO
        if (nome != "" && email != "" && telefone != "") {
    
            //BARRA COM MENSAGEM
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            const appendAlert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="submit" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')
    
                alertPlaceholder.append(wrapper)
    
    
            }
    
            //JOIN DA MENSAGEM
            appendAlert('Nome: ' + nome + '<br/>E-mail: ' + email + '<br/>Telefone: ' + telefone, 'success')
    
    
            //Zerando valores
            nome = ""
            email = ""
            telefone = ""
            document.getElementById('validationTooltip01').value = "";
            document.getElementById('validationTooltip02').value = "";
            document.getElementById('validationTooltip03').value = "";
    
        } else {
            // alert("Preencha os campos");
            document.getElementById('alerta').innerHTML = '<div class="alert alert-danger" role="alert">Preencha os campos indicados</div>'
        }
    
    })
    

})

