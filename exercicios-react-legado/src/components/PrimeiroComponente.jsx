import React from 'react';

let isLegal = true

export default (props) =>
    <div>
        <h1>{props.value}</h1>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
    </div>

//export default () => <h1>Primeiro Componente</h1>

//export default () => {
//    return <h1>Primeiro Componente</h1>
//}

//export function Primeiro() {
//    return <h1>Primeiro Componente</h1>
//}