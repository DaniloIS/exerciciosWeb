import React from 'react';

import Membro from "./Membro";

export default props => 
    <div>
        <Membro name='Danilo' lastName={props.lastName} />
        <Membro name='Diego' lastName={props.lastName} />
        <Membro name='Pedro' lastName={props.lastName} />
        <Membro name='Fernanda' lastName={props.lastName} />
    </div>