/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Transition } from 'react-transition-group';
import { fetch, cancelFetch, clear } from '../store/actions/weatherList';

import Map from '../components/Map';
import WeatherCard from './WeatherCard';
import Carousel from './carousel/Carousel';

const HomePage = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
    opacity: ${props => props.transitionState === 'entered' ? 1 : '0'};
    transition: opacity .8s ease-out;
`;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: false
        };

        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
        this.setState({ mounted: true });
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
        const { mounted } = this.state;

        return (
            <Transition in={mounted}
                        timeout={0}
                        unmountOnExit>
                {(state) => (
                    <HomePage transitionState={state}>
                        <Map onClick={this.getWeather} popupText={city.name} />
                        <Carousel>
                            {list.map((day) => <WeatherCard day={day} key={day.date} />)}
                        </Carousel>
                    </HomePage>
                )}
            </Transition>
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