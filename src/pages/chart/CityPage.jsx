import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { cancelFetch, clear, fetch } from "../../store/actions/weatherList";

import CityFinder from '../../components/CityFinder.jsx';
import Chart from '../../components/Chart.jsx';
import WeatherService from '../../services/WeatherService';

const Page = styled('div')`
  
`;

const WeatherCard = styled('div')`

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
            <Page>
                <CityFinder
                    value={city}
                    onChange={this.fetchWeather} />

                <WeatherCard>
                    {/* todo: make CityName */}
                    <h3>Weather in {`${city.name}, ${city.country || city.sys.country}`}</h3>

                    <Chart data={WeatherService.prepareDataChart(weatherList)} />
                </WeatherCard>
            </Page>
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