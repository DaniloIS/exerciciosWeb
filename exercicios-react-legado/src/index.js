import React from 'react';
import ReactDOM from 'react-dom';

//import { Primeiro } from './components/PrimeiroComponente'
//import Primeiro from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponente'
import Mult from './components/MultElementos'

ReactDOM.render(
    <div>
        <CompA value='Olá eu sou A' />
        <CompB value='Olá eu sou B' />
        <Mult />
    </div>,
    document.getElementById('root')
)