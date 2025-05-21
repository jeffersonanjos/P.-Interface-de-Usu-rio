//export default function Props(props){

export default function Props({nome, idade}){ //exemplo de desestruturação de props, trabalha-se em forma de variáveis
    return(
        <>
            <div>
                <h2>Teste Props</h2>
                <h2>Ola {nome}, {idade}</h2>
                <img src="foto" alt={nome} />

            </div>
        </>

    );

}