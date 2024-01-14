var tarefa = "";
var lista = [];
var mod = true;
$(document).ready(function () {

    //BOTAO ADICIONAR
    $('#btAdd').on("click", function (event) {
        event.preventDefault();

        tarefa = document.getElementById("idInput").value;

        if (tarefa != "") {

            //document.getElementById('idUl').innerHTML += '<li>'+tarefa+'</li>';
            //document.querySelector("li").innerHTML += '<li>'+tarefa+'</li>';
            //document.querySelector("#idUl").innerHTML += '<li id="li'+lista.length+'">'+tarefa+'</li>';
            //document.querySelector("ul").innerHTML += '<li onclick="alert(this.id)" id="li'+lista.length+'">'+tarefa+'</li>';
            document.querySelector("ul").innerHTML += '<li id="li' + lista.length + '">' + tarefa + '</li>';

            //Inserir dados na lista
            lista.push(tarefa);

            //Console das informações das tarefas informadas
            console.log(tarefa);

            //Console da lista
            console.log(lista);

            //Consolta do tamanho da lista
            console.log("li" + lista.length);

            //Limpar input
            $('#idInput').val("");


        }else{
            alert("Insira uma tarefa")
        }



        //LISTA
        $("li").on("click", function (event) {
            event.preventDefault();
            identif = this.id;

            if (mod == true) {
                //$("#" + identif).attr('style', 'text-decoration: line-through');
                $("#" + identif).attr({style: "text-decoration: line-through; background-color: gray"});
                mod = false;
            } else {
                $("#" + identif).attr('style', 'text-decoration: none');
                mod = true;
            }
            console.log(identif)
        });

    });

    /*  $('ul').on("click", function(event){
         tamanho = lista.length - 1;
         event.preventDefault();
         console.log("REMOVI")
         $('#li'+tamanho+'').remove();
         console.log('li'+tamanho+'')
         lista.pop()
         //lista.splice(1,1)
         
     }) */





})