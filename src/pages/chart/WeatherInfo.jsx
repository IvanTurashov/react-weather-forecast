import React, { memo } from 'react';
import styled from '@emotion/styled';
import moment from "moment";

import { Celsius } from "../../components/Common.jsx";
import { List, ListItem } from "../../style/common";
import StyleConst from '../../style/constants';

const Card = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  font-weight: bold;
`;

const Title = styled('div')`
  font-size: 24px;
  
  @media (max-width: ${StyleConst.md}) {
    font-size: 20px;
  }
`;

const Subtitle = styled('div')`
  font-size: 18px;
  color: #666;
  
  @media (max-width: ${StyleConst.nd}) {
    font-size: 16px;
  }
`;

const MainInfo = styled('div')`
  margin: 8px 0;
  padding: 12px 0;
  font-size: 22px;

  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  
  @media (max-width: ${StyleConst.md}) {
    font-size: 18px;
  }
`;

const Img = styled('img')`
  --s: 60px;
  width: var(--s);
  height: var(--s);
  
  @media (max-width: ${StyleConst.md}) {
    --s: 50px;
  }
`;

const Temperature = styled('div')`
  display: inline-block;
  margin-left: 14px;
`;

const Additional = styled(List)`
  text-wrap: none;
`;

const WeatherInfo = memo(({ weather = null, city }) => {
    return (
        weather && (
            <Card>
                <Title>Weather in {`${city.name}, ${city.country}`}</Title>
                <Subtitle>{moment.unix(weather.date).format('dddd, MMM Do')}</Subtitle>

                <MainInfo>
                    <Img src={`https://openweathermap.org/img/w/${weather.main.icon}.png`}
                         alt={weather.main.icon} />

                    <Temperature>
                        <div>
                            Day: <Celsius temp={weather.temp.day} />
                        </div>
                        <div>
                            Night: <Celsius temp={weather.temp.day} />
                        </div>
                    </Temperature>
                </MainInfo>

                <Additional>
                    <ListItem>
                        <span>Wind</span>
                        <div>{weather.speed} mps</div>
                    </ListItem>

                    <ListItem>
                        <span>Humidity</span>
                        <div>{weather.humidity}%</div>
                    </ListItem>
                </Additional>
            </Card>
        )
    );
});

export default WeatherInfo;