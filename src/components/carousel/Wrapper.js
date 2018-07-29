/**
 * Created by ivan on 04.07.18.
 */

import React from 'react';

const Wrapper = props => {
    const style = {
        width: '100%',
        overflow: 'hidden'
    };

    const {children} = props.children;

    return(
        <div style={style}>{children}</div>
    )
};

export default Wrapper;