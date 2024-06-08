<script setup>
//IMPORTAÇÃO
import {reactive} from 'vue';

//REACTIVE
const estado = reactive({

  //VAR
  numero1: 0,
  numero2: 0,
  op: "---",
  sinal: "---",
  teste: function (){

    //CONDIÇÕES PARA OPERAÇÕES
    if(estado.op==="1"){
      var {numero1, numero2} = estado;
      var somatoria = parseInt(numero1) + parseInt(numero2);
      this.sinal = "OPERAÇÃO DE SOMA SELECIONADA";
      return somatoria;

  }else if(estado.op==="2"){
      var {numero1, numero2} = estado;
      var somatoria = parseInt(numero1) - parseInt(numero2);
      this.sinal = "OPERAÇÃO DE SUBTRAÇÃO SELECIONADA";
      return somatoria;
  }else if(estado.op==="3"){
      var {numero1, numero2} = estado;
      var somatoria = parseInt(numero1) * parseInt(numero2);
      this.sinal = "OPERAÇÃO DE MULTIPLICAÇÃO SELECIONADA";
      return somatoria;
  }else if(estado.op==="4"){
      var {numero1, numero2} = estado;
      var somatoria = parseInt(numero1) / parseInt(numero2);
      this.sinal = "OPERAÇÃO DE DIVISÃO SELECIONADA";
      return somatoria;
  }
    
  }
});


  //TEXTO
  var abc = "CALCULADORA";


</script>


<template>

  <div class="container">

    <h1>
    {{ abc }}
    </h1>

  <div id="calculadora">
    <select @change="evento => estado.op = evento.target.value" id="seletor" class="form-select" aria-label="Disabled select example">
      <option selected>Escolha a Operação Matematica</option>
      <option value="1">Soma</option>
      <option value="2">Subtração</option>
      <option value="3">Multiplicação</option>
      <option value="4">Divisão</option>
    </select>

    <div id="resultado">{{ estado.teste() }}</div>


    <br>
    <input @keyup="evento => estado.numero1 = evento.target.value" id="i1" type="number">
    <br>
    <input @keyup="evento => estado.numero2 = evento.target.value" id="i2" type="number">
    <br>  
    <div id="operacao">{{ estado.sinal }}</div>
    
  
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
    width: 400px;
    color: white;
    border: solid;
    display: inline-block;
    font-size: 30px;
    padding-top: 8px;
  }

  #seletor{
    background-color: #7f8fa6;
    width: 300px;
    text-align: center;
    color: white;
    
  }

  .erro{
    border-color: red;
  }

</style>
