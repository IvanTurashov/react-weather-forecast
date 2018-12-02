import React, { memo } from 'react';
import styled from 'react-emotion';
import moment from "moment";
import { List, ListItem } from "../../style/common";
import StyleConst from '../../style/constants';

const WeatherInfoCard = styled('div')`
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
  color: #666666;
  
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

const Temp = styled('div')`
  display: inline-block;
  margin-left: 14px;
`;

const AdditionalInfo = styled(List)`
  text-wrap: none;
`;

const WeatherInfo = memo(({ weather = null, city }) => {
    /* todo: make city name */
    return (
        weather && (
            <WeatherInfoCard>
                <Title>Weather in {`${city.name}, ${city.country || city.sys.country}`}</Title>
                <Subtitle>{moment.unix(weather.date).format('dddd, MMM Do')}</Subtitle>

                <MainInfo>
                    <Img src={`https://openweathermap.org/img/w/${weather.main.icon}.png`}
                         alt={weather.main.icon} />

                    <Temp>
                        <div>Day: {weather.temp.day} ℃</div>
                        <div>Night: {weather.temp.night} ℃</div>
                    </Temp>
                </MainInfo>

                <AdditionalInfo>
                    <ListItem>
                        <span>Wind</span>
                        <div>{weather.speed} mps</div>
                    </ListItem>

                    <ListItem>
                        <span>Humidity</span>
                        <div>{weather.humidity}%</div>
                    </ListItem>
                </AdditionalInfo>
            </WeatherInfoCard>
        )
    );
});

export default WeatherInfo;