allora oggi abbiamo fatto un contatore e un input text che modifica in tempo reale e mostra ciò che scrivi
spiegazione contatore
abbiamo usato la funzione usestate che va importata poiche ò una fuznione di  react, use state funziona che tu definisci cosa vuoi cambiare per esempio nel contatore è il count, seguito da un setcount che è una funzione che aggiorna il primo valore(count)  e poi si usa il usestate indicando tra le parentesi il valore da cui vuoi iniziare per esempio usestate(0) oppure se è del testo metti usestate("quello che vuoi anche vuoto") ha questo aspetto  const [count, setCount] = useState(0); tutto ciò dentro una function , function Counter(){
    const [count, setCount] = useState(0);
    
    return (
    );
}

dopodiche  che fai il teamplate 
        <div>
        <h1>Conteggio: {count}</h1>
        //qua per esempio aggiungiamo dei bottoni che al click usano la funzione setcount per aumentare diminuire o resettare il count
        <button onClick={() => setCount(count + 1)}>Incrementa</button>
        <button onClick={() => setCount(count - 1)}>Diminuisci</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>

 eserciazio due funziona come il primo ma con un text dove prendiamo il nome di qualcuno e ha questo aspetto qui const [name, setName] = useState('Matteo');

 in questo caso useremo un input di tipo text con una funzione onchange per permetterci di cambiare name in tempo reale 

 si mostra così <p>ciao {name}</p>
        <input type="text" 
        placeholder='inserisci il tuo nome vero'
        onChange={(e) => setName(e.target.value)} />
        qui nella arrow function mettiamo e perchè vogliamo monitorare l'evento specifico infatti poi per modificare il nome indichiamo come target il value di e quindi e.target.value