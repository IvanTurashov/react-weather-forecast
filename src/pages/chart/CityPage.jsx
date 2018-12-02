import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { cancelFetch, clear, fetch } from "../../store/actions/weatherList";

import CityFinder from '../../components/CityFinder.jsx';
import Chart from '../../components/Chart.jsx';
import WeatherInfo from './WeatherInfo.jsx'
import WeatherService from '../../services/WeatherService';
import { Page, Row } from '../../style/common';
import StyleConst from '../../style/constants';

const RowExtend = styled(Row)`
  flex: 1;
  align-items: flex-start;
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

class CityPage extends Component {
    constructor(props) {
        super(props);

        this.fetchWeather = this.fetchWeather.bind(this);
    }

    componentDidMount() {
        const { city } = this.props;
        if (city.id) this.fetchWeather(city);
    }

    fetchWeather({ id }) {
        const { fetch } = this.props;

        fetch({ id });
    }

    render() {
        const { city, weatherList } = this.props;
        const current = weatherList[0];

        return (
            <Fragment>
                <RowExtend>
                    <InfoContainer>
                        <CityFinder
                            value={city}
                            onChange={this.fetchWeather} />

                        <WeatherInfo
                            weather={current}
                            city={city} />
                    </InfoContainer>

                    <ChartContainer>
                        <Chart data={WeatherService.prepareDataChart(weatherList)} />
                    </ChartContainer>
                </RowExtend>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        weatherList: state.weatherList.list,
        city: state.weatherList.city,
        request: state.weatherList.request
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: id => {
            dispatch(fetch(id));
        },
        cancelFetch: () => {
            dispatch(cancelFetch());
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);