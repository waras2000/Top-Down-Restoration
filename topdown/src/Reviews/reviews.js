import React from 'react';
import Navbar from '../NavBar/Navbar';
import './reviews.css';
const Reviews = () => {
  const yelpReviewHtml = `<span class="yelp-review" data-review-id="R-MV_p0rHDz1uPJDE47O5A" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=a1Ruap-96HbnAmvxgutWUA" rel="nofollow noopener">David A.</a>'s <a href="https://www.yelp.com/biz/top-down-restoration-brooklyn?hrid=R-MV_p0rHDz1uPJDE47O5A" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/orvrhCHZp8az3-ccKyyG0w" rel="nofollow noopener">Top Down Restoration</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`;

  return (
    <div>
      <Navbar />
      {/* Embedding the Yelp review */}
      <div
      dangerouslySetInnerHTML={{ __html: yelpReviewHtml }}
    ></div>
    </div>
  );
};

export default Reviews;