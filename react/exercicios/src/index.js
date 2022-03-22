import React from 'react';
import ReactDOM from 'react-dom';

import { BomDia } from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <BomDia name='Danilo' />
    <BoaTarde name='Danilo'/>
    <BoaNoite />
    <Saudacao type='Bom dia' name='Danilo'/>
    <Pai name='José' lastName='Santos'>
      <Filho name='Danilo' />
      <Filho name='Diego' />
    </Pai>
  </div>,
  document.getElementById('root')
);
