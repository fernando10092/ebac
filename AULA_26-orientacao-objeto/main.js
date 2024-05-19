//Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
const arr = [{nome:"Fernando",nota:10},{nome:"Lilian",nota:5},{nome:"Adriana",nota:4},{nome:"Felipe",nota:3},{nome:"Renata",nota:7}]
arr.push({nome:"Valeria",nota:9});
arr.push({nome:"Ludmila",nota:8});


//Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
arr.forEach((e)=>{
    if(e.nota>=6){
        return console.log("Alunos com nota maior que 6: "+e.nome+" - nota: "+e.nota);
    }
})





