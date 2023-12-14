import React from 'react';
import './ServicesPage.css';
import Navbar from '../NavBar/Navbar'
const SidingServices = () => {
  return (
    <div>
        <Navbar/>
      <header>
        <h1>Our Siding Services - TopDown Restoration</h1>
      </header>

      <section>
        <h2>Residential Services</h2>
        <p>
          Our residential siding services involve siding installation and replacement. Our goal is to ensure we meet all of your siding needs!
        </p>

        <h2>Commercial Services</h2>
        <p>
          Our Commercial siding services are the same as our residential!
        </p>

      
      </section>

      <footer>
        <p>&copy; 2023 TopDown Restoration. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SidingServices;