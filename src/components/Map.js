/**
 * Created by ivan on 23.06.18.
 */

import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    build() {
        const map = L.map('map'),
            tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }),
            zoom = 13;

        let marker;

        map.setView([59.934, 30.335], zoom);
        tileLayer.addTo(map);

        map.on('click', ({latlng}) => {
            const {lat, lng} = latlng;

            if (marker !== undefined) map.removeLayer(marker);

            marker = L.marker([lat, lng]).addTo(map);
            map.setView([lat, lng], zoom);

            this.setLatLng(latlng);
        })
    }

    setLatLng(latlng) {
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