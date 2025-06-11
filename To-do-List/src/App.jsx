// Importa o arquivo de estilos App.css
import './App.css'

// Importa o componente Tarefa, que será usado para exibir cada tarefa
import Tarefa from './components/Tarefa'

// Importa o componente Diario, que funciona como um "container" para as tarefas
import Diario from './components/Diario'

// Função principal do app (componente App)
function App() {

  // Define um array de objetos, cada um representando uma tarefa
  // Cada tarefa tem título, descrição e se está concluída ou não
  const tarefas = [
    {
      titulo: "Comprar mantimentos",
      descricao: "Ir ao mercado e comprar frutas, legumes e pão.",
      concluida: false
    },
    {
      titulo: "Estudar JavaScript",
      descricao: "Ler sobre objetos, arrays e funções.",
      concluida: true
    },
    {
      titulo: "Fazer exercícios",
      descricao: "Treino de academia com foco em pernas.",
      concluida: false
    },
    {
      titulo: "Organizar documentos",
      descricao: "Separar papéis importantes e jogar fora os desnecessários.",
      concluida: true
    },
    {
      titulo: "Responder e-mails",
      descricao: "Checar a caixa de entrada e responder mensagens pendentes.",
      concluida: false
    }
  ]

  // Aqui é o que será renderizado na tela
  return (
    <>
      {/* Usa o componente Diario como container principal */}
      <Diario>

        {/* Para cada tarefa no array, cria um componente Tarefa usando .map */}
        {tarefas.map(tarefa => (
          <Tarefa
            // Envia o título como propriedade 'nome' para o componente Tarefa
            nome={tarefa.titulo}
            // Envia a descrição como propriedade 'desc'
            desc={tarefa.descricao}
            // Envia se a tarefa está concluída ou não
            concluida={tarefa.concluida}
          />
        ))}

      </Diario>
    </>
  )
}

// Exporta o componente App para ser usado em outros lugares
export default App
