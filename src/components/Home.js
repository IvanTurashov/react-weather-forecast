/**
 * Created by ivan on 23.06.18.
 */

import React from 'react';
import Map from '../components/Map';
import { WeatherService } from '../services/WeatherService';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latlng: {}
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
                console.log(data);
            }, console.error);
    }

    render() {
        return (
            <div>
                <Map onClick={(latlng) => this.getWeather(latlng)}/>
            </div>
        );
    };
}

export default Home;