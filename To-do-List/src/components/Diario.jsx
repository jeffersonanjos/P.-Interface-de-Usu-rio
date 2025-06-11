// Exporta o componente 'Diario' como padrão para que possa ser importado em outros arquivos
// Ele recebe um parâmetro chamado 'children', que representa os elementos filhos passados dentro dele
export default function Diario({ children }) {

  // Tudo que estiver aqui dentro será renderizado na tela
  return (
    <>
      {/* Título principal da página */}
      <h1>To-Do-List</h1>

      {/* Linha horizontal para separar o título do conteúdo */}
      <hr />

      {/* 
        Aqui estamos renderizando 'children', que pode ser 
        qualquer conteúdo (outros componentes, textos, etc)
        passado entre as tags <Diario>...</Diario> quando usado.
      */}
      {children}
    </>
  )
}
