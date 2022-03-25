import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member'

ReactDOM.render(
    <Family lastName='Isidoro'>
        <Member name='Danilo'  />
        <Member name='Diego'  />
    </Family>,
    document.getElementById('app')
)   