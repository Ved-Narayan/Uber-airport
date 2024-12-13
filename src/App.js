import React from 'react';
import UberAirportBookingPreview from './components/UberAirportBookingPreview';
import './App.css';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="App">
      <UberAirportBookingPreview />
      <Card/>
      <Button/>
    </div>
  );
}

export default App;