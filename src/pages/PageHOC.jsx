import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { cancelFetch, clear, fetch } from "../store/actions/weatherList";

const PageHOC = Page => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.getWeather = this.getWeather.bind(this);
        }

        componentDidMount() {
            const { city } = this.props;
            if (city.id) this.getWeather({ id: city.id });
        }

        componentWillUnmount() {
            this.props.cancelFetch();
        }

        getWeather(params) {
            this.props.fetch(params);
        }

        render() {
            return (
                <Page
                    getWeather={this.getWeather}
                    {...this.props} />
            );
        }
    }
};

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

export default compose(connect(mapStateToProps, mapDispatchToProps), PageHOC);