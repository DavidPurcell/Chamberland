import React, { Component } from 'react';
import { Formik } from 'formik';
import CoordinatePoint from './CoordinatePoint';
import CoordinatePoint from './HeadingPoint';

const COORDINATE = "coordinate";
const DEFAULT_COORDINATE = [1,1,COORDINATE];
const HEADING = "heading";
const DEAFAULT_HEADING = [90,1,HEADING];

class PolygonCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polygonPoints: []
    };
  }

  updatePoint = (i,point) => {
    const state = this.state;
    console.log("updating point", i, point);

    var newPoints = state.polygonPoints.map((key, index) => {
      if(index == i){
        return point
      } else {
        return key;
      }
    });

    console.log("New Points", newPoints);

    this.setState({polygonPoints: newPoints });
  };

  removePoint = (i) => {
    var newPoints = this.state.polygonPoints;
    newPoints.splice(i,1);
    this.setState({polygonPoints: newPoints });
  }

  setTech = () => {
    var newPoints = [
        [33.928219, -84.348048, COORDINATE],
        [33.928202, -84.347840, COORDINATE],
        [33.926395, -84.347848, COORDINATE],
        [33.926404, -84.348232, COORDINATE],
        [33.928058, -84.348243, COORDINATE]
    ]
    this.setState({polygonPoints: newPoints });
  }

  render() {
    const state = this.state;
    const polygonPoints = state.polygonPoints;

    console.log("Polygon Points", polygonPoints);
    const pointsList = polygonPoints.map((key, index) => {
        console.log(key[2], COORDINATE);
        if(key[2] == COORDINATE){
          const coordinateProps = {index: index, point: key, removePoint: this.removePoint, updatePoint: this.updatePoint}
          console.log("Coordinate Props", coordinateProps);
          return (
            <div>
              <CoordinatePoint {...coordinateProps} />
            </div>
          );
        } else {
          const headingProps = {index: index, heading: key[0], distance: key[1], removePoint: this.removePoint, updatePoint: this.updatePoint}
          console.log("Heading Props", headingProps);
          return (
            <div>
              <HeadingPoint {...headingProps} />
            </div>
          );
        }
    });

    return (
      <div>
        <button onClick={() => this.setState({ polygonPoints: this.state.polygonPoints.concat([DEFAULT_COORDINATE])})}>
          Add Points
        </button>
        <div>
          {pointsList}
        </div>
        <div>
          <button onClick={() => this.setTech()}>
            SetTech
          </button>
        </div>
        <div>
          <button onClick={() => this.props.setPolygon(polygonPoints)}>
            Draw
          </button>
        </div>
      </div>
    );
  }
}

export default PolygonCreator;
