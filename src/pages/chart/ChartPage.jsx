import React from 'react';
import styled from '@emotion/styled';

import WeatherService from '../../services/WeatherService';
import PageHOC from '../PageHOC.jsx';
import CityFinder from './CityFinder.jsx';
import Chart from './Chart.jsx';
import WeatherInfo from './WeatherInfo.jsx'
import Error from '../../components/Error.jsx';
import StyleConst from '../../style/constants';

const Page = styled('div')`
  display: flex;
  align-items: flex-start;
  flex: 1;
  padding: 10px;
  
  & > div {
    padding: 0 20px;
  }
  
  @media (max-width: ${StyleConst.sm}) {
    flex: none;
    display: block;
  
    & > div {
      padding: 0;
    }
  }
`;

const InfoContainer = styled('div')`
  flex: 1;
`;

const ChartContainer = styled('div')`
  flex: 0 1 70%;
  min-height: 400px;
  height: 90%; 
  pointer-events: none;
`;

const ChartPage = props => {
    const { city, list, error, getWeather } = props;
    const current = list[0];
    const preparedData = WeatherService.prepareDataChart(list);

    return (
        <Page>
            <InfoContainer>
                <CityFinder
                    value={city}
                    onChange={getWeather}
                />

                <WeatherInfo
                    weather={current}
                    city={city}
                />

                <Error error={error} />
            </InfoContainer>

            <ChartContainer>
                <Chart data={preparedData} />
            </ChartContainer>
        </Page>
    )
};

export default PageHOC(ChartPage);