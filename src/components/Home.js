/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch, cancelFetch, clear } from '../store/actions/weatherList';

import Map from '../components/Map';
import WeatherCard from './WeatherCard';
import Carousel from './carousel/Carousel';

class Home extends Component {
    constructor(props) {
        super(props);

        this.getWeather = this.getWeather.bind(this);
    }

    componentWillUnmount() {
        this.props.cancelFetch();
        this.props.clear();

        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(latlng) {
        this.props.fetch(latlng);
    }

    render() {
        const { list, city, request } = this.props;

        return (
            <div className="home">
                <Map onClick={this.getWeather} popupText={city.name} />
                <Carousel>
                    {list.map((day) => <WeatherCard day={day} key={day.date} />)}
                </Carousel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { city, list, request } = state.weatherList;

    return { city, list, request };
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: latlng => {
            dispatch(fetch(latlng));
        },
        cancelFetch: () => {
            dispatch(cancelFetch());
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);