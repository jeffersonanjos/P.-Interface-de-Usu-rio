// Importa o hook useState do React, que permite criar variáveis que mudam com o tempo
import { useState } from "react"

// Declaração do componente funcional chamado 'Tarefa'
// Ele recebe dados através de 'props'
export default function Tarefa(props) {

  // Criação de um estado chamado 'concluida'
  // Ele começa com o valor vindo das props (true ou false)
  // 'setConcluida' é a função que usaremos para alterar esse valor
  let [concluida, setConcluida] = useState(props.concluida)

  // Tudo que for retornado aqui será exibido na tela
  return (
    <>
      {/* Exibe o nome da tarefa, vindo da prop 'nome' */}
      <h3>{props.nome}</h3>

      {/* Exibe a descrição da tarefa, vinda da prop 'desc' */}
      <p>Descrição: {props.desc}</p>

      {/* 
        Parágrafo que mostra o status da tarefa (Concluída ou Pendente).
        A cor muda de acordo com o estado 'concluida':
        - verde se estiver concluída
        - vermelha se estiver pendente
      */}
      <p style={{ color: concluida ? "green" : "red" }}>
        A Tarefa está {concluida == true ? "Concluida" : "Pendente"}
      </p>

      {/*
        Botão que muda o estado da tarefa quando clicado.
        - Se a tarefa estiver pendente, o botão mostrará "Concluir"
        - Se estiver concluída, mostrará "Reabrir"
        A função 'setConcluida' inverte o valor atual.
      */}
      <button onClick={() => setConcluida(!concluida)}>
        {concluida == false ? "Concluir" : "Reabrir"}
      </button>

      {/* Linha horizontal para separar visualmente as tarefas */}
      <hr />
    </>
  )
}
