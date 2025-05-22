export default function Tema({ toggleTema, temaEscuro }) {
  return (
    <button className="tema-toggle" onClick={toggleTema}>
      {temaEscuro ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}