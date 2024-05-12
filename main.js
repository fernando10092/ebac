///CLASSE ABSTRATA
class Pessoa{
    nome = "Fernando";
    idade = 31;
    sexo = "m";
    nasc = "17/12/1992";
}

const pessoa = new Pessoa()
console.log(pessoa)

///CLASSE INFO ADICIONAL - HERANÇA COM EXTENDS
class Adicional extends Pessoa{ 
    cpf = "XXX.XXX.XXX.XX";
    rg = "XXXXXXXX-X"
    num_titulo = "XXXXXXXXXXXXXX";
    cnh = "XXXXXXXXXXXXXX"
}

const adicional = new Adicional()
console.log(adicional)


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

