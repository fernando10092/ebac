setInterval(myTimer, 1000);

function myTimer() {

    //VARIAVEIS - DATA
    const tempo = new Date();
    var ano = tempo.getFullYear();
    var mes = tempo.getMonth() + 1;
    var dia = tempo.getDate();
    var hora = tempo.getHours();
    var minuto = tempo.getMinutes();
    var segundos = tempo.getSeconds();
    var birthday = new Date("12/17/2024");

    //DATA E HORA ATUAL
    var tempoAtual = document.getElementById('tempo').innerHTML = dia + "/" + mes + "/" + ano + "  -  " + tempo.toLocaleTimeString();

    //CALCULO DIF DIAS
    var timeDiff = Math.abs(tempo.getTime() - birthday.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var countDay = document.getElementById('dias').innerHTML = diffDays//contagem/3.154e+10;

    //HORAS - MINUTOS - SEGUNDOS
    document.getElementById('hora').innerHTML = 24 - (hora + 1);
    document.getElementById('minutos').innerHTML = " " + (60 - minuto);
    document.getElementById("segundos").innerHTML = " " + (60 - segundos);


    console.log(mes);
    if (dia == "17" && mes == "12") {

        document.getElementById("msg").innerHTML = "PARABÉNS!!! HOJE É SEU ANIVERSÁRIO";

        document.getElementById('dias').innerHTML = " -- ";
        document.getElementById('hora').innerHTML =  " -- ";
        document.getElementById('minutos').innerHTML = " -- ";
        document.getElementById("segundos").innerHTML = " -- ";
        

    }else if(dia > "17" && mes == "12"){

        document.getElementById("msg").innerHTML = "SEU ANIVERSÁRIO JÁ PASSOU";

        document.getElementById('dias').innerHTML = " -- ";
        document.getElementById('hora').innerHTML =  " -- ";
        document.getElementById('minutos').innerHTML = " -- ";
        document.getElementById("segundos").innerHTML = " -- ";
        

    }else if(ano=="2025"){

        document.getElementById("msg").innerHTML = "2024 FINALIZADO";

        document.getElementById('dias').innerHTML = " -- ";
        document.getElementById('hora').innerHTML =  " -- ";
        document.getElementById('minutos').innerHTML = " -- ";
        document.getElementById("segundos").innerHTML = " -- ";

    }

    ////### CONTAGEM REGRESSIVA - DIAS ###////
    //ANIVERSARIO EM 2024
    //var timestamp = new Date(2024, 12, 17).getTime();
    //ANIVERSÁRIO - TEMPO ATUAL
    //var contagem = timestamp - tempo


    //TESTES
    // document.getElementById('teste').innerHTML = tempo.toLocaleTimeString();
    //var timestamp = new Date(2024, 12, 17).getTime();
    //var contagem = timestamp - tempo
    // console.log(parseInt(contagem / 86400000))

}


