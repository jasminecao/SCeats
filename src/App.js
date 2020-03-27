import React from 'react';
import './App.css';
import Header from './Header.js';
import MapContainer from './MapContainer.js';
import RestCardContainer from './RestCardContainer';

function App() {
  return (
    <>
      <Header/>
      <RestCardContainer/>
      <MapContainer/>
    </>
  );
}

export default App;
