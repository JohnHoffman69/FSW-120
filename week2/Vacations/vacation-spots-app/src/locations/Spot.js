import React from 'react';
import './spot.css';


function Spot(props) {

    
    return (
        
        <div className="vacaSpotContainer">
            <h3>DESTINATION: {props.place}</h3>
            <h3>PRICE: {props.price}</h3>
            <h3 >BEST TIME TO GO: {props.timeToGo}</h3>
        </div>
    )
}

export default Spot