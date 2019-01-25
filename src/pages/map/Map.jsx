import React, { PureComponent } from 'react';
import L from 'leaflet';
import styled from '@emotion/styled';

import 'leaflet/dist/leaflet.css';
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});

const MapWrapper = styled('div')`
  flex: 1;
`;

class Map extends PureComponent {
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
            this.setMarker(latlng, () => {
                this.whenMarkerSet(latlng);
            });
        });
    }

    setMarker(latlng, callback) {
        this.map.setView(latlng, 13);
        this.marker = L.marker(latlng).addTo(this.map);

        if (typeof callback === 'function') callback();
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

export default Map;