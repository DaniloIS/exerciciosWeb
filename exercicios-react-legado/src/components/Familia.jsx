import React from 'react';

import { filhosComProps } from '../utils/utils';
export default props => 
    <div>
        <h1>Família</h1>
        {/*props.children*/}
        {/*React.cloneElement(props.children, props)*/}
        {/*React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })*/}
        {filhosComProps(props)}
    </div>