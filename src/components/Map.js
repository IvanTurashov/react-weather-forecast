/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component {
    build() {
        const map = L.map('map'),
            tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }).addTo(map),
            zoom = 13,
            StPetersburg = {lat: 59.934, lng: 30.335};

        const setMarker = (latlng) => {
            const {lat, lng} = latlng;

            marker = L.marker([lat, lng]).addTo(map);
            map.setView([lat, lng], zoom);

            this.whenMarkerSet(latlng);
        };

        let marker;
        setMarker(StPetersburg);

        map.on('click', ({latlng}) => {
            if (marker !== undefined) map.removeLayer(marker);
            setMarker(latlng);
        })
    }

    whenMarkerSet(latlng) {
        this.props.onClick(latlng);
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

export default Map;