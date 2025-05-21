
import './App.css'
import Props from './componentes/Props'
import foto from './assets/recruta.jpg'

function App (){
  let aluno = 'Dos Anjos'
  return(
    <>
    <Props nome={aluno} idade={19} numero={24} foto={foto} descricao="Foto minha"/>

    </>
  )
}
export default App
