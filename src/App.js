import './App.css';
import Messaggio from './Messaggio.js';
import Utente from './CardUtente.js';


function App() {
  return (
    <div className="App">
    <div>
      <h1>Ciao, sono la mia  React!</h1>
      <Messaggio testo="Questo è un messaggio di prova." />
      <Messaggio testo="react sembra interessante" />
      <Utente nome="Matteo" cognome="Pizzichemi" description="student of react" />
    </div>
    </div>
  );
}

export default App;
