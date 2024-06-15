//IMPORTAÇÂO DE BIBIOTECA E COMPONENTES
import { useState } from 'react';
import nome from './partials/variaveis';
import {Formulario, Inputnew, Btn, Meuh5, Limpar} from './partials/componente';

//IMPORTAÇÃO DO CSS
import './css/App.css'

//FUNCAO IMC
function App() {

  //USESTATE PARA OBTER OS VALORES DOS CAMPOS
  let [getNumeroPeso, setNumeroPeso] = useState(0);
  let [getNumeroAlt, setNumeroAlt] = useState(0);
  //CALCULO IMC: PESO / (ALTURA* ALTURA)
  let alturaImc = getNumeroAlt * getNumeroAlt;

  //CONDIÇÃO PARA NÃO INICIAR COM ERRO DEVIDO A DIVISÃO
  let imc = (getNumeroPeso / alturaImc) == 0 ? 0 : (getNumeroPeso / alturaImc).toFixed(2);
  let mensagem = "";

  //IF - TABELA DE CLASSFICAÇÃO
  if(imc<18.5){
    mensagem = "Magreza"
  }else if(imc>=18.5 && imc<=24.9){
    mensagem = "Normal"
  }else if(imc>=24.9 && imc<=30){
    mensagem = "Sobrepeso"
  }else if(imc>=30){
    mensagem = "Obesidade"
  }else{
    mensagem = " --- "
  }


  //RETURN
  return (

    <div className='fundo'>

      {/*TEXTO COM IMPORTAÇÃO DE CSS E USO DE VARIAVEL*/}
      <h1 className='cor-fundo'>{nome}</h1>

      {/*INPUT COM ENVIO DE VALORES*/}
      <form>
        <input id='idPeso' placeholder='PESO' onChange={evento => setNumeroPeso(evento.target.value)} type="text" /><br/>
        <input id='idAlt' placeholder='ALTURA' onChange={evento => setNumeroAlt(evento.target.value)} type="text" /><br/>
      </form>
      {/*BOTAO DE LIMPAR*/}
      <button onClick={evento => {{setNumeroPeso(evento.target.value = "0")}{setNumeroAlt(evento.target.value = "0")}{document.getElementById("idPeso").value = ""}{document.getElementById("idAlt").value = ""}}}>LIMPAR</button>
  
      {/*USO DA VARIAVEL DO INPUT*/} <br/>    
      Peso: {getNumeroPeso} <br/>
      Altura: {getNumeroAlt}
      <h2>Percentual IMC: {imc}</h2>
      <h1>Classificação IMC: {mensagem}</h1>

      {/*COMPONENTES CRIADOS*/}
      <Meuh5/>

    </div>
    
  )


}

//EXPORTAÇÃO
export default App