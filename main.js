///CLASSE ABSTRATA
class Pessoa{
    nome = "Fernando";
    idade = 31;
    sexo = "m";
    nasc = "17/12/1992";
}

const pessoa = new Pessoa()
console.log(pessoa)

///CLASSE INFO DADOS - HERANÇA COM EXTENDS 1
class Adicional extends Pessoa{ 
    cpf = "444.444.444-44";
    rg = "39674076-5"
    num_titulo = "6666666666666";
    cnh = "155000"
}

const adicional = new Adicional()
console.log(adicional)

///CLASSE INFO BANCARIA - HERANÇA COM EXTENDS 2
class Adicional2 extends Pessoa{ 
    banco = "Itau";
    agencia = "9999-9"
    conta = "00000-0";
    
}

const adiciona2 = new Adicional2()
console.log(adiciona2)


///FUNCAO CONSTRUTORA
function Profissao(cpf, nome, cargo){
    this.cpf = cpf,
    this.nome = nome,
    this.cargo = cargo
}

const profissao = new Profissao(adicional.cpf, pessoa.nome, "Medico");
console.log(profissao)

///FUNCAO CONSTRUTORA - HERANÇA COM CALL()
function Salario(cpf, nome, cargo, valor){
    Profissao.call(this, cpf, nome, cargo);
    this.valor = valor       
}

const salario = new Salario("428.000.000-00", "Adriana", "Contador", 5000);
console.log(salario)

///FUNCAO CONSTRUTORA - HERANÇA COM CALL 2()
function Banco(banco, agencia, conta){
    Profissao.call(this, "168.111.111.45", "Lilian", "Medica")
    this.banco = banco,
    this.agencia = agencia,
    this.conta = conta
}

const banco = new Banco("Itau", "0100-4", "06565-5");
console.log(banco);