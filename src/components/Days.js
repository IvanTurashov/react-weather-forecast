/**
 * Created by ivan on 30.06.18.
 */

import React from 'react';
import moment from 'moment';

function toCelsius(temp) {
    const value = temp - 273;
    return value.toFixed() + '℃';
}

const Days = props => {
    return (
        <div className="list-days">
            {props.days.map((day, idx) => <Day day={day} key={idx} />)}
        </div>
    )
};

const Day = props => {
    const day = props.day;

    return (
        <div className="day">
            <div className="header">
                <img width="50" height="50" src={`http://openweathermap.org/img/w/${day.main.icon}.png`}
                     alt={day.main.icon} />

                <div>
                    <h3 className="title">{moment.unix(day.date).format('ddd, MMM Do')}</h3>
                    <h4 className="sub-title">{day.main.description}</h4>
                </div>
            </div>

            <div className="body">
                <div className="temp"><strong>{toCelsius(day.temp.max)}</strong> | {toCelsius(day.temp.min)}</div>

                <div>humidity: {day.humidity} %</div>
                <div>speed: {day.speed} mps</div>
            </div>
        </div>
    )
};

export { Days };