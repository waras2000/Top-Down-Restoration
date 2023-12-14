import React from 'react';
import './ServicesPage.css';
import Navbar from '../NavBar/Navbar'
const RoofingServices = () => {
  return (
    <div>
        <Navbar/>
      <header>
        <h1>Our Roofing Services - TopDown Restoration</h1>
      </header>

      <section>
        <h2>Residential Services</h2>
        <p>
          We provide services to residential homes across the state of New York! We work on small and large projects ranging from 200 square feet, all the way too 100,000 square feet!
        </p>

        <h2>Commercial Services</h2>
        <p>
          We cater our commercial services with long-term contracts for maintenance and are ready to work with architects/engineers to get any project going.
        </p>

   

     
      </section>

      <footer>
        <p>&copy; 2023 TopDown Restoration. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RoofingServices;