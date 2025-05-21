
import './App.css'
import Props from './componentes/Props'

function App (){
  let aluno = 'Dos Anjos'
  return(
    <>
    <Props nome={aluno} idade={18} />
    </>
  )
}
export default App
