//export default function Props(props){

export default function Props({nome, idade, numero, foto, descricao}){ //exemplo de desestruturação de props, trabalha-se em forma de variáveis
    return(
        <>
            <div>
                <h2>Teste Props</h2>
                <h2>Olá {nome} sua idade é {idade}, seu número de guerra é {numero}</h2>
                <figure>
                    <img src={foto} alt={nome}/>
                    <figcaption>{descricao}</figcaption>
                </figure>
            </div>
        </>

    );

}