const EscopoReduz = () => {
    function handleClick (){
        return (
            alert ("clicaste de novo boy")
        )
    }
    return(
        <>
        <button onClick={() => console.log("Você clicou")}>Clique aqui</button>
        <div>
            <button onClick={() => alert("Você clicou")}>Novo botão</button>
        </div>
        <div>
            <button onClick={handleClick}>Botão 3</button>
        </div>

        <div className="container" onClick={() => alert("container")}></div>
        </>
    )
}

export default EscopoReduz