var tdNome;
var tdContato;
var idNome;
var idContato;
var idFooter;
var listaContato = [];

document.getElementById("idEnviar").addEventListener("click", function (event) {
    event.preventDefault();


    //Recebendo variaveis
    idNome = document.getElementById("idNome").value;
    idContato = document.getElementById("idContato").value;


    if (idNome == "" || idContato == "") {
        document.getElementById("lbInfo").innerHTML = "Não é permitido campos vazios<br/>"


    }
    else {

        //inserindo elementos
        tdNome = document.getElementById("tdNome").innerHTML += idNome + "<br/>";
        tdContato = document.getElementById("tdContato").innerHTML += idContato + "<br/>";
        idFooter = document.getElementById("idFooter").innerHTML = "Total: " + (listaContato.length + 1);
        alert("Dados Inseridos com Sucesso!!!")

        //Lista
        listaContato.push(idContato);
        console.log(listaContato);
        console.log(listaContato.length);


        //Apagando Infos do input
        document.getElementById("idNome").value = "";
        document.getElementById("idContato").value = "";
        document.getElementById("lbInfo").innerHTML = ""


    }


});
