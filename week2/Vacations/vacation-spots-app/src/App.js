import React from 'react';
import './App.css';
import vacaSpots from './locations/vacaSpots.js'
import Spot from './locations/Spot.js'
import Header from './locations/Header.js'

function App() {
  
    const vacationComps = vacaSpots.map(spot => <Spot key={spot.id} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    
    return (
        <div>
        <Header /> 
        {vacationComps}
        </div>
    )
}

export default App