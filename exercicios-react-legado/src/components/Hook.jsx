import React, { useEffect, useState } from 'react';

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setStatus] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    }, [contador])
    return (
        <div>
            <h1>{status}</h1>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>+</button>
        </div>
    )
}