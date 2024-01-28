//PARA BAIXAR OS PLUGINS, ESCOLHA NO GOOGLE O PLUGIN JQUERY, BAIXE E ENVIE O ARQUIVO NO SRC PARA SEU PROJETO / INSIRA TAMBEM NO HTML CODE
var contador = 0;
$(document).ready(function () {
    $("#btEnviar").on("click", function (event) {
        event.preventDefault();

        //Dados na Lista
        var lista = []
        contador += 1;
        lista.push($('#idNome').val(), $('#idEmail').val(), $('#idTel').val(), $('#idCpf').val(), $('#idEndereco').val(), $('#idCep').val())
        alert(lista)

        //Limpando Campos
        $('#idNome').val('')
        $('#idEmail').val('')
        $('#idTel').val('')
        $('#idCpf').val('')
        $('#idEndereco').val('')
        $('#idCep').val('')

        //
        document.querySelector('ul').innerHTML += '<h2>'+contador+' - '+lista+'</h2>'

    });

    //Mascaras
    $('#idTel').mask('(00) 00000-0000')
    $('#idCpf').mask("000.000.000-00")
    $('#idCep').mask('00000-000')
})