// Verifique os caminhos - eles devem ser exatos
import Galeria from './components/Galeria.jsx'; // Adicione a extensão
import Tema from './components/Tema.jsx'; // Adicione a extensão
import './styles/light.css';
import './styles/dark.css';

const App = () => {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  useEffect(() => {
    document.body.className = temaEscuro ? 'dark' : 'light';
  }, [temaEscuro]);

  const toggleTema = () => setTemaEscuro(!temaEscuro);

  return (
    <div className={`app ${temaEscuro ? 'dark' : 'light'}`}>
      <Tema toggleTema={toggleTema} temaEscuro={temaEscuro} />
      <Galeria 
        personagemSelecionado={personagemSelecionado}
        setPersonagemSelecionado={setPersonagemSelecionado}
      />
    </div>
  );
};

export default App;