<script setup>

  //TEXTO
  var abc = "CALCULADORA";


  //OPERAÇÃO
  function operacao(){

    console.log(document.getElementById("seletor").value);

    if(document.getElementById("input1").value != "" && document.getElementById("input2").value != ""){
  
      if(document.getElementById("seletor").value === "1"){
      var valor = parseFloat(document.getElementById("input1").value) + parseFloat(document.getElementById("input2").value);
      document.getElementById("resultado").value = valor;
      document.getElementById("msg").innerHTML = "";
 

    }else if(document.getElementById("seletor").value === "2"){
      var valor = parseFloat(document.getElementById("input1").value) - parseFloat(document.getElementById("input2").value);
      document.getElementById("resultado").value = valor;
      document.getElementById("msg").innerHTML = "";
 

    }else if(document.getElementById("seletor").value === "3"){
      var valor = parseFloat(document.getElementById("input1").value) * parseFloat(document.getElementById("input2").value);
      document.getElementById("resultado").value = valor;
      document.getElementById("msg").innerHTML = "";
     

    }else if(document.getElementById("seletor").value === "4"){
      var valor = parseFloat(document.getElementById("input1").value) / parseFloat(document.getElementById("input2").value);
      document.getElementById("resultado").value = valor;
      document.getElementById("msg").innerHTML = "";

    }

    }else(
      console.log("DIGITE OS VALORES"),
      document.getElementById("msg").innerHTML = "Selecione a operação e digite os valores"
      
    )


  }


</script>

<template>

  <div class="container">

    <h1>
    {{ abc }}
    </h1>

  <div id="calculadora">
    <select id="seletor" class="form-select" aria-label="Disabled select example">
      <option selected>Escolha a Operação Matematica</option>
      <option value="1">Soma</option>
      <option value="2">Subtração</option>
      <option value="3">Multiplicação</option>
      <option value="4">Divisão</option>
    </select>
    <input disabled id="resultado" type="number">
    <br>
    <input @change="operacao()" placeholder="digite um valor" id="input1" type="number">
    <br>
    <input @change="operacao()" placeholder="digite um valor" id="input2" type="number">

    <div id="msg"></div>
   
  
    
  </div>
 


  </div>


</template>

<style>

body{
  margin: 0 auto;
  padding: 0;
  background-color: #34495e;
}

 #app{
  background-color: #2c3e50;
  width: 100vw;
  display: block;

 }

  .container{
    background-color: #40739e;
    width: 70%;
    height: 600px;
  }

  h1{
    color: white;
    text-align: center;
  }

  button{
    cursor: pointer;
    width: 50px;
    height: 30px;
  }

  input{
    height: 50px;
    width: 300px;
    font-size: 30px;
  }

  #calculadora{
    background-color: #2c3e50;
    text-align: center;
    height: 400px;

  }

  #resultado{
    margin-top: 10px;
    background-color: #2f3640;
    height: 70px;
    color: white;
    border: solid;
  }

  #seletor{
    background-color: #7f8fa6;
    width: 300px;
    text-align: center;
    color: white;
    
  }

</style>
