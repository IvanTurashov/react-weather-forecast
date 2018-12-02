/**
 * Created by ivan on 23.06.18.
 */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import { Transition } from 'react-transition-group';
import { fetch, cancelFetch, clear } from '../../store/actions/weatherList';

import Map from '../../components/Map.jsx';
import WeatherCard from '../../components/WeatherCard.jsx';
import Carousel from '../../components/carousel/Carousel.jsx';
import { Loader } from '../../components/Loaders.jsx';

const CarouselWrapper = styled(Loader)` 
  min-height: 110px;
`;

class MapPage extends Component {
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

        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(latlng) {
        this.props.fetch(latlng);
    }

    render() {
        const { list, city, request, error } = this.props;
        const { mounted } = this.state;

        return (
            <Fragment>
                <Map
                    onClick={this.getWeather}
                    popupText={city.name}
                    coord={city.coord} />
                <CarouselWrapper
                    showLoader={request}
                    showError={error}>
                    <Carousel>
                        {list.map((day) => <WeatherCard day={day} key={day.date} />)}
                    </Carousel>
                </CarouselWrapper>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { city, list, request, error } = state.weatherList;

    return { city, list, request, error };
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

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);