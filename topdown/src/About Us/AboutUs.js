import React from 'react';
import './AboutUsCSS.css'
import Navbar from '../NavBar/Navbar';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />

      <header>
        <h1>About Us - Top Down Restoration</h1>
      </header>

      <section>
        <h2>ABOUT US</h2>
        <p>
          Top Down Restoration has been in business for over 30 years and has always operated with strong values aimed at
          satisfying our clients. We’re always open to communicating with our clients until they are completely satisfied.
        </p>

        <h2>Benefits of Hiring Us</h2>
        <p>
          Top Down Restoration is your trusted partner for all construction needs. With over 30 years of experience, we
          stand out in the industry for the following reasons:
        </p>

        <p>
          <strong>Experienced Construction Company:</strong> Our team's mastery in roofing, brick pointing, painting,
          and other services ensures the delivery of excellence and quality to every client.
        </p>

        <p>
          <strong>Appropriate Equipment and Tools:</strong> Our skilled workers come equipped with the proper tools for
          every job, ensuring excellence in roofing, brick pointing, painting, and other services.
        </p>

        <p>
          <strong>Affordable Pricing:</strong> Our estimates are competitive and honest. We believe in fair pricing for
          outstanding workmanship. Contact us for detailed pricing information.
        </p>

        <p>
          <strong>Excellent Service:</strong> Customer satisfaction is our priority. We back our work with warranties,
          demonstrating our confidence in the quality of our service.
        </p>

        <p>
          <strong>High-Quality Materials:</strong> Leveraging decades of experience, we use only the highest-quality
          materials for every project, ensuring durability and longevity.
        </p>
      </section>

    
    </div>
  );
};

export default AboutUsPage;