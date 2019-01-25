import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
import styled from '@emotion/styled';
import { cancelFetch, clear, fetch } from "../../store/actions/cities";

const Description = styled('div')`
  padding-left: 2px;
  font-size: 12px;
  color: #666;
`;

class City extends Component {
    constructor(props) {
        super(props);

        this.searchCity = this.searchCity.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { value } = this.props;
        fetch(value.id);
    }

    componentWillUnmount() {
        const { cancelFetch, clear } = this.props;

        cancelFetch();
        clear();
    }

    searchCity(q) {
        const { fetch } = this.props;
        const valid = this.validate(q);

        if (valid) fetch(q);
    }

    handleChange({id}) {
        const {onChange} = this.props;

        onChange({id});
    }

    validate(v) {
        return v.trim().length > 2;
    }

    render() {
        const { cities, request, value } = this.props;

        return (
            <Fragment>
                <Select
                    value={value}
                    options={cities}
                    getOptionLabel={city => city.id ? `${city.name}, ${city.country || city.sys.country}` : 'Not selected'}
                    getOptionValue={(option) => (option['id'])}
                    onInputChange={this.searchCity}
                    onChange={this.handleChange}
                    isLoading={request}
                />

                <Description>
                    Input more than 3 letters
                </Description>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    const { list: cities, request } = state.cities;

    return { cities, request }
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: q => {
            dispatch(fetch(q));
        },
        cancelFetch: () => {
            dispatch(cancelFetch());
        },
        clear: () => {
            dispatch(clear());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);