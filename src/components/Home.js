/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { WeatherService } from '../services/WeatherService';

import Map from '../components/Map';
import { Days } from './Days';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        }
    }

    componentWillUnmount() {
        if (typeof this.source !== 'undefined') {
            this.source.cancel('Request canceled')
        }
    }

    getWeather(latlng) {
        if (typeof this.source !== 'undefined') {
            this.source.cancel('Request canceled')
        }

        this.source = axios.CancelToken.source();

        WeatherService.getWeatherByPosition(latlng, this.source.token)
            .then(data => {
                this.setState({days: data});
            }, console.error);
    }

    render() {
        return (
            <div className="home">
                <Map onClick={(latlng) => this.getWeather(latlng)} />
                <Days days={this.state.days} />
            </div>
        );
    }
}

export default Home;