import React, { Component } from 'react';
import MapView from './MapView';
import PolygonCreator from './PolygonCreator';

class Mapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polygonPoints: undefined
    };
  }

  setPolygon = (p) => {
    this.setState({polygonPoints: p });
  }

  render() {
    const state = this.state;
    const polygonPoints = state.polygonPoints;
    const mapProps = {polygon: polygonPoints};
    const creatorProps = {setPolygon: this.setPolygon};

    console.log(polygonPoints);

    const mapViewOrPolygonCreator = polygonPoints == undefined ? <PolygonCreator {...creatorProps} /> : <MapView {...mapProps} />;

    return (
      <div>
        {mapViewOrPolygonCreator}
      </div>
    );
  }
}

export default Mapper;
