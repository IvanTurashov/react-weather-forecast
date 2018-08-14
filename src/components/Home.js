/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { WeatherService } from '../services/WeatherService';

import Map from '../components/Map';
import WeatherCard from './WeatherCard';
import Carousel from './carousel/Carousel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            city: {}
        };
    }

    cancelRequest() {
        if (typeof this.source !== 'undefined') {
            this.source.cancel('Request canceled');
        }
    }

    componentWillUnmount() {
        this.cancelRequest();
    }

    getWeather(latlng) {
        this.cancelRequest();
        this.source = axios.CancelToken.source();

        WeatherService
            .getWeatherByPosition(latlng, this.source.token)
            .then(({list: days, city}) => {
                this.setState({days, city});
            }, console.error);
    }

    render() {
        return (
            <div className="home">
                <Map onClick={(latlng) => this.getWeather(latlng)} popupText={this.state.city.name}/>
                <Carousel>
                    {this.state.days.map((day, idx) => <WeatherCard day={day} key={idx}/>)}
                </Carousel>
            </div>
        );
    }
}

export default Home;