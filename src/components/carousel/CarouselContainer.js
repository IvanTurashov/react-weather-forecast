/**
 * Created by ivan on 04.07.18.
 */

import React from 'react';

const CarouselContainer = props => {
    const style = {
        display: 'flex',
        margin: '0 0 20px 20px',


    };

    const {children} = props.children;

    return (
        <div style={style}>{children}</div>
    );
};

export default CarouselContainer;