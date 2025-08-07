import React, { useState } from 'react';


function Counter(){
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <h1>Conteggio: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Incrementa</button>
        <button onClick={() => setCount(count - 1)}>Diminuisci</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;