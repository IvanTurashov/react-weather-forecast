/**
 * Created by ivan on 30.06.18.
 */

import React from 'react';

import Day from '../components/Day';

const Days = props => {
    return (
        <div className="list-days">
            {props.days.map((day, idx) => <Day day={day} key={idx} />)}
        </div>
    )
};

export default Days;