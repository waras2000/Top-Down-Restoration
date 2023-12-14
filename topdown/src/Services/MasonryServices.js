import React from 'react';
import './ServicesPage.css';
import Navbar from '../NavBar/Navbar'
const MasonryServices = () => {
  return (
    <div>
        <Navbar/>
      <header>
        <h1>Our Masonry Services - TopDown Restoration</h1>
      </header>

      <section>
        <h2>Residential Services</h2>
        <p>
          Our residential services are tailored to meet the unique needs of homeowners. We provide services ranging from simple mortar repair, all the way up to facade replacements.
        </p>

        <h2>Commercial Services</h2>
        <p>
          Our Commercial Services are similar to our residential services but in a larger scale, and also allowing for our customers to have long term service agreements to effortlessly manage their properties.
        </p>

  
      </section>

      <footer>
        <p>&copy; 2023 TopDown Restoration. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MasonryServices;