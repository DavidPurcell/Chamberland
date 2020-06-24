import React from 'react';
import MapView from './components/MapView';
import './App.css';

function App() {

  const polygon = [
    [33.773, -84.395],
    [33.773, -84.394],
    [33.772, -84.394],
    [33.772, -84.395]
  ]

  const mapProps = {polygon: polygon};

  return (
    <div className="App">
      <MapView {...mapProps} />
    </div>
  );
}
export default App;
