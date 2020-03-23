import React from 'react';
import './App.css';
import Header from './Header.js';
import MapContainer from './MapContainer.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function App() {
  return (
    <>
      <Header/>
      <MapContainer/>
    </>
  );
}

export default App;
