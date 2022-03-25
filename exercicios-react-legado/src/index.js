import React from 'react';
import ReactDOM from 'react-dom';

//import { Primeiro } from './components/PrimeiroComponente'
//import Primeiro from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponente'
import Mult from './components/MultElementos'
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'

ReactDOM.render(
    <div>
        {/*<CompA value='Olá eu sou A' />
        <CompB value='Olá eu sou B' />
        <Mult />
        <FamiliaSilva />*/}
        <Familia>
            <Membro name='Danilo' lastName='Isidoro' />
            <Membro name='Diego' lastName='Isidoro' />
        </Familia>
    </div>,
    document.getElementById('root')
)