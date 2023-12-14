import React from 'react';
import './ServicesPage.css';
import Navbar from '../NavBar/Navbar'
const ServicesSummary = () => {
  return (
    <div>
        <Navbar/>
      <header>
        <h1>Our Services - TopDown Restoration</h1>
      </header>

      <section>
        <h2>Residential Services</h2>
        <p>
          Our residential services are tailored to meet the unique needs of homeowners. From renovations and
          remodels to custom home construction, we have the expertise to bring your vision to life.
        </p>

        <h2>Commercial Services</h2>
        <p>
          For businesses looking to enhance their spaces, our commercial services cover a wide range of projects.
          Whether it's office renovations, retail build-outs, or new construction, we deliver top-notch solutions.
        </p>

        <h2>Remodeling and Renovations</h2>
        <p>
          Transform your existing space into something new and exciting with our remodeling and renovation services.
          We focus on quality craftsmanship and attention to detail to ensure your satisfaction.
        </p>

        <h2>Custom Construction</h2>
        <p>
          Our custom construction services are designed for those who want a unique and personalized home or
          commercial space. We work closely with clients to turn their ideas into reality.
        </p>
      </section>

      <footer>
        <p>&copy; 2023 TopDown Restoration. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicesSummary;