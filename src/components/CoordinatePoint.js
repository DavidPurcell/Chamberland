import React, { Component } from 'react';
import { Formik } from 'formik';

class CoordinatePoint extends Component {
  constructor(props) {
    super(props);
  }

  updatePoint = (lat, long) => {
    const index = this.props.index;
    lat = parseInt(lat);
    long = parseInt(long);


    if(lat > 90) lat=90;
    if(lat < -90) lat=-90;

    if(long > 180) long=180;
    if(long < -180) long=-180;


    console.log("New Point", lat, long);

    this.props.updatePoint(index, [lat, long, "coordinate"]);
  };

  render() {
    const lat = this.props.point[0];
    const long = this.props.point[1];
    const index = this.props.index;

    console.log("POINT", index, this.props.point, lat, long);

    return (
      <div id={index} key={index}>
          <p>
               {index} :
                Lat <input type="number" value={lat} onChange={(e) => this.updatePoint(e.target.value, long)}/> :
                Long <input type="number" value={long} onChange={(e) => this.updatePoint(lat, e.target.value)}/>
                <button onClick={() => this.props.removePoint(index)}>x</button>
          </p>
      </div>
    );
  }
}

export default CoordinatePoint;
