var texto = "";
var novo = "";
var novinho = "";
var imagem;
$(document).ready(function(){
    
    $('#btAbrir').on("click", function(event){
        $('#insertImg').slideDown();
    });

    $('#btFechar').on("click", function(event){
        $('#insertImg').slideUp();
    });

    /* $('#btAdd').on("click", function(event){
        event.preventDefault();
        texto = document.getElementById("idName").value;
        novo += texto;
        console.log(novo);
        
        
    }) */

    $('#btAdd').on("click", function(event){
        event.preventDefault();
        console.log("ENTREI");
        imagem = document.getElementById('insertUl');
        imagemValue = document.getElementById('idName').value;
        imagem.innerHTML += '<img class="clImg" src="'+imagemValue+'">'
        console.log(imagemValue)
    })


    

})





