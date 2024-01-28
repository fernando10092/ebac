$(document).ready(()=>{
    console.log("funcionou");
    $("#idSobre").on("mouseover",(event)=>{
        event.preventDefault();
        console.log("Apertei");

        $("#idUlOpen").toggle();
    });

    $("#idProdutos").on("mouseover",(event)=>{
        event.preventDefault();
        console.log("Apertei");

        $("#idUlOpen").toggle();
    });
    
    $("#btMenu").on("click",(event)=>{
        event.preventDefault();
        console.log("Apertei");

        $("#idUlOpen").toggle();
    });

})