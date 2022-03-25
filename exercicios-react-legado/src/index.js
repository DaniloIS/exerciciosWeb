import React from 'react';
import ReactDOM from 'react-dom';

//import { Primeiro } from './components/PrimeiroComponente'
//import Primeiro from './components/PrimeiroComponente'
// import { CompA, CompB } from './components/DoisComponente'
// import Mult from './components/MultElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao'

ReactDOM.render(
    <div>
        <ComponenteComFuncao />
        {/*<CompA value='Olá eu sou A' />
        <CompB value='Olá eu sou B' />
        <Mult />
        <FamiliaSilva lastName='Isidoro' />
        <Familia lastName='Isidoro'>
            <Membro name='Danilo' />
            <Membro name='Diego' />
            <Membro name='Daniel' />
        </Familia>*/}
    </div>,
    document.getElementById('root')
)