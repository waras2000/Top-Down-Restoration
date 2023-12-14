import React from 'react';
import Navbar from '../NavBar/Navbar';
import './reviews.css';
import YelpReviews from './yelpreviews'
const Reviews = () => {

  return (
    <div>
      <Navbar />
      {/* Embedding the Yelp review */}
      <YelpReviews/>
    </div>

  );
};

export default Reviews;