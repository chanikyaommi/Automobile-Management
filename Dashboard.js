import React from 'react';
import './Dashboard.css'; // Import the CSS file
import AppBar from './Appbardashboard.js';
import harrier from './imgaes/harrier.jpg';
import innova from './imgaes/innova.jpg';
import maruti from './imgaes/Waganor.jpg'; 
import swift from './imgaes/swift1.jpg'; 
import thar from './imgaes/Thar.jpeg'; 
import fortuner from './imgaes/fortuner.jpeg';
import tiago from './imgaes/tiago.jpeg';
import amaze from './imgaes/amaze.jpeg';  
import { Link } from 'react-router-dom';
// import React from 'react';

function Home() {
  return (
    <div>
      <div className="dashboard-container">
        <AppBar position="static">
      
        </AppBar>
      </div>

      <div className='body'>
        <div className='Cargrid'>
          <div className='image-container'>
            <img className='image_1' src={harrier} alt="Description of your image"/>
            <p>Tata Harrier <br/>
            Price -₹15,00,000<br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/harrier"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={innova} alt="Description of your image"/>
            <p>Innova<br/>
            Price -₹18,00,000 <br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/innova"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={maruti} alt="Description of your image"/>
            <p>Waganor<br/>
            Price -₹4,00,000 <br/>
            Mileage - 18-20km<br/></p>
            <Link to="/selected-car/maruti"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={swift} alt="Description of your image"/>
            <p>Swift<br/>
            Price -₹6,00,000 <br/>
            Mileage - 18-22km<br/></p>
            <Link to="/selected-car/swift"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>

          <div className='image-container'>
            <img className='image_1' src={thar} alt="Description of your image"/>
            <p >Thar <br/>
            Price -₹18,00,000<br/>
            Mileage - 18km<br/></p>
            <Link to="/selected-car/thar"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={fortuner} alt="Description of your image"/>
            <p >Fortuner <br/>
            Price -₹56,00,000<br/>
            Mileage - 12km<br/></p>
            <Link to="/selected-car/fortuner"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>

          <div className='image-container'>
            <img className='image_1' src={tiago} alt="Description of your image"/>
            <p >Tiago <br/>
            Price -₹7,00,000<br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/tiago"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div><div className='image-container'>
            <img className='image_1' src={amaze} alt="Description of your image"/>
            <p >Amaze <br/>
            Price -₹9,00,000<br/>
            Mileage - 19km<br/></p>
            
            <Link to="/selected-car/amaze"> {/* Link to SelectedCar component with car name parameter */}
          <button>Buy</button>
        </Link>
          </div>
        </div>
        <footer className="footer" style={{ backgroundColor: '#1976d2', color: 'white' }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect with Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


      </div>
    </div>
  );
}

export default Home;