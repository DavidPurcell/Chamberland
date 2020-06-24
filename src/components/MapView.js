import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
}  from 'react-leaflet';

class MapView extends Component {
  constructor(props) {
    super(props);
    const polygon = JSON.parse(JSON.stringify(props.polygon));
    console.log(polygon);

    let totalLatLong = polygon.reduce(sumLatLong);
    function sumLatLong(total, latLong) {
      total[0] += latLong[0];
      total[1] += latLong[1];
      return total;
    }
    let avgLat = totalLatLong[0] / polygon.length;
    let avgLong = totalLatLong[1] / polygon.length;

    console.log(avgLat, avgLong);

    this.state = {
      currentLocation: { lat: avgLat, lng: avgLong },
      polygon: props.polygon,
      zoom: 20,
    }
  }
  render() {


    const { currentLocation, polygon, zoom } = this.state;
    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Polygon color="purple" positions={polygon} />
      </Map>
    );
  }
}

export default MapView;
