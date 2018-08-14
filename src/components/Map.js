/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: undefined
        }
    }

    build() {
        const map = L.map('map');
        const tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        const zoom = 13;
        const StPetersburg = { lat: 59.934, lng: 30.335 };

        const setMarker = (latlng) => {
            const { lat, lng } = latlng;

            map.setView([lat, lng], zoom);
            this.setState({
                marker: L.marker([lat, lng]).addTo(map)
            });

            this.whenMarkerSet(latlng);
        };

        setMarker(StPetersburg);

        map.on('click', ({ latlng }) => {
            const marker = this.state.marker;

            if (marker !== undefined) map.removeLayer(marker);
            setMarker(latlng);
        });
    }

    whenMarkerSet(latlng) {
        this.props.onClick(latlng);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.marker) {
            this.state.marker.bindPopup(nextProps.popupText).openPopup();
            return true;
        }

        return false;
    }

    componentDidMount() {
        this.build();
    }

    render() {
        return (
            <div id="map" className="map"></div>
        );
    }
}

Map.propTypes = {
    popupText: PropTypes.string
};

export default Map;