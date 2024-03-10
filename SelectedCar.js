// SelectedCar.js
import React from 'react';
import { useParams } from 'react-router-dom';
import harrier from './imgaes/harrier.jpg'; // Import the car images
import innova from './imgaes/innova.jpg';
import maruti from './imgaes/Waganor.jpg'; 
import swift from './imgaes/swift1.jpg'; 
import thar from './imgaes/Thar.jpeg'; 
import fortuner from './imgaes/fortuner.jpeg';
import tiago from './imgaes/tiago.jpeg';
import amaze from './imgaes/amaze.jpeg';  
import './SelectedCar.css';

function SelectedCar() {
  const { carName } = useParams();

  // Define a map to link car names to their respective images
  const carImages = {
    harrier: harrier,
    innova: innova,
    waganor: maruti, // Update the key to match the parameter value
    swift: swift,
    thar: thar,
    fortuner: fortuner,
    tiago: tiago,
    amaze: amaze
  };

  return (
    <div>
      <h2 className='Selected_head'>Selected Car Details</h2>
      <div className='image_container'>
        <img className='image_1' src={carImages[carName]} alt={carName} />
        <p>{carName}</p>
      </div>
      <button className='Button' onClick={() => alert('Payment done successfully!')} style={{ backgroundColor: 'green' }}>Buy</button>
    </div>
  );
}

export default SelectedCar;