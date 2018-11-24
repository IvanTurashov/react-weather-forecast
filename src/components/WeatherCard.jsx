/**
 * Created by ivan on 02.07.18.
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'react-emotion';

const Card = styled('div')`
  flex: 0 0 240px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 12px;
  background-color: rgb(245, 245, 245);
`;

const Header = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const WeatherImage = styled('img')`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #d3d3d3;
`;

const Title = styled('h3')`
  margin: 0;
`;

const Subtitle = styled('h4')`
  margin: 0;
`;

const Temperature = styled('div')`
  font-size: 16px;
`;

const ToCelsius = memo(({ temp }) => {
    const value = temp - 273.15;
    return value.toFixed() + '℃';
});

const WeatherCard = memo(props => {
    const day = props.day;

    return (
        <Card>
            <Header>
                <WeatherImage src={`https://openweathermap.org/img/w/${day.main.icon}.png`}
                              alt={day.main.icon} />

                <div>
                    <Title>{moment.unix(day.date).format('ddd, MMM Do')}</Title>
                    <Subtitle>{day.main.description}</Subtitle>
                </div>
            </Header>

            <div>
                <Temperature>
                    <strong>
                        <ToCelsius temp={day.temp.max} />
                    </strong>
                    | <ToCelsius temp={day.temp.min} />
                </Temperature>

                <div>humidity: {day.humidity} %</div>
                <div>speed: {day.speed} mps</div>
            </div>
        </Card>
    );
});

WeatherCard.propTypes = {
    day: PropTypes.object
};

export default WeatherCard;