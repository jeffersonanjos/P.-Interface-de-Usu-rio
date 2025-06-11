// Importa o StrictMode do React, um componente que ajuda a identificar problemas no código durante o desenvolvimento
import { StrictMode } from 'react'

// Importa a função createRoot da biblioteca react-dom/client
// Essa função é usada para renderizar a aplicação dentro da página HTML
import { createRoot } from 'react-dom/client'

// Importa os estilos globais da aplicação
import './index.css'

// Importa o componente principal da aplicação (App), que você criou
import App from './App.jsx'

// Localiza o elemento <div id="root"> no HTML, onde a aplicação será montada
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Renderiza o componente App dentro do StrictMode */}
    {/* Tudo que está dentro de <App /> será exibido na tela */}
    <App />
  </StrictMode>,
)
