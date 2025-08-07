import { useState } from 'react';

function Greet() {
    const [name, setName] = useState('Matteo');
  return (
    <div>
        <p>ciao {name}</p>
        <input type="text" 
        placeholder='inserisci il tuo nome vero'
        onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Greet;