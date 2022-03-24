import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name='Danilo' lastName='Isidoro' />
    </Family>,
    document.getElementById('app')
)   