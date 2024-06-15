//Formulario
function Formulario() {
    return (
        <form action="">
            <input placeholder="Digite seu peso" type="number" /> <br/>
            <input placeholder="Digite sua altura" type="number" /> <br/>
            <button>Calcular IMC</button>
        </form>
    )
}

//Input
function Inputnew() {
    return (
        <>
            <input placeholder="Digite..." type="text" name="" id="" />
        </>
    )
}

//Botao
function Btn() {
    return (
        <>
            <button>CALULAR IMC</button>
        </>
    )
}

//H1
function Meuh5(){
    return(
        <>
            <h5>REACT</h5>
        </>
    )
}

//LIMPAR
function Limpar(){



    return(
        <>
            <button>LIMPAR</button>
        </>
    )
}

export { Formulario, Inputnew, Btn , Meuh5, Limpar };