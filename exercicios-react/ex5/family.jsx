import React from 'react';

import { childrenWithProps } from '../utils/reactUtils';

export default props => (
    <div>
        <h1>Família</h1>
        {/*React.cloneElement(props.children, {...props})*/}
        {childrenWithProps(props.children, props)}
    </div>
)