/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import styled from 'react-emotion';

const MapWrapper = styled('div')`
  flex: 1;
`;

class Map extends Component {
    constructor(props) {
        super(props);

        this.map = null;
        this.marker = null;
        this.tileLayerUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png';
    }

    componentDidMount() {
        this.build();
    }

    componentDidUpdate() {
        const { popupText } = this.props;
        if (this.marker && popupText) this.marker.bindPopup(popupText).openPopup();
    }

    componentWillUnmount() {
        this.destroy();
    }

    build() {
        const { coord } = this.props;
        this.map = L.map('map');
        L.tileLayer(this.tileLayerUrl, {
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(this.map);

        this.setMarker({
            lat: coord.lat,
            lng: coord.lon
        });

        this.map.on('click', ({ latlng }) => {
            if (typeof this.marker !== 'undefined') this.map.removeLayer(this.marker);
            this.setMarker(latlng);
        });
    }

    setMarker(latlng) {
        this.map.setView(latlng, 13);
        this.marker = L.marker(latlng).addTo(this.map);

        this.whenMarkerSet(latlng);
    }

    whenMarkerSet({ lat, lng: lon }) {
        this.props.onClick({ lat, lon });
    }

    destroy() {
        this.map.remove();
    }

    render() {
        return (
            <MapWrapper id="map" />
        );
    }
}

Map.propTypes = {
    popupText: PropTypes.string
};

export default Map;