/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

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
        if (this.marker) this.marker.bindPopup(this.props.popupText).openPopup();
    }

    componentWillUnmount() {
        this.destroy();
    }

    build() {
        const StPetersburg = {
            lat: 59.94627470693442,
            lng: 30.37350656613762
        };

        this.map = L.map('map');
        const tileLayer = L.tileLayer(this.tileLayerUrl, {
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(this.map);

        this.setMarker(StPetersburg);

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

    whenMarkerSet(latlng) {
        this.props.onClick(latlng);
    }

    destroy() {
        this.map.remove();
    }

    render() {
        return (
            <div id="map" className="map" />
        );
    }
}

Map.propTypes = {
    popupText: PropTypes.string
};

export default Map;