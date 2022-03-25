import React from 'react';
import ReactDOM from 'react-dom';

//import { Primeiro } from './components/PrimeiroComponente'
//import Primeiro from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponente'

ReactDOM.render(
    <div>
        <CompA value='Olá eu sou A' />
        <CompB value='Olá eu sou B' />
    </div>,
    document.getElementById('root')
)