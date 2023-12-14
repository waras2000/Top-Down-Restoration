import React, { useState } from 'react';
import MariamIcon from './YelpReviewInfo/MariamImage.jpg';
import './reviews.css';
import YelpIcon from './YelpReviewInfo/yelpicon.png';
import JessicaIcon from './YelpReviewInfo/JessicaP.jpg';
import CatIcon from './YelpReviewInfo/CatC.jpg'
import WenxinIcon from './YelpReviewInfo/Wenxin.jpg'
import DavidIcon from './YelpReviewInfo/David.jpg'
const Review = ({ user, date, initialText, additionalText, iconSrc }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="textbox">
      <img src={iconSrc} alt={`User: ${user}`} className="user-image" />
      <p className="user-name">{user}</p>
      <p className="user-date">{date}</p>
      <div className="user-text" style={{ maxHeight: showMore ? 'none' : '150px' }}>
        {initialText}
        {showMore && additionalText && (
          <div>
            <p>{additionalText}</p>
            <button onClick={() => setShowMore(false)}>Read Less</button>
          </div>
        )}
      </div>
      {!showMore && (
        <button onClick={() => setShowMore(true)}>Read More</button>
      )}
      <img src={YelpIcon} alt="Main Icon" className="icon-image" />
    </div>
  );
};

const App = () => {
  return (
    <div className="center-container">
      <div className="grid-container">
        {/* User 1 */}
        <Review
          user="Mariam"
          date="2023-11-12"
          initialText="I had a wonderful experience with Top down restoration . After severe damage to my home I was nervous that the fix & remodel process would be a nightmare, but Integrity Restoration turned a negative to a positive. I initially spoke with them and decided to go with them based on our conversation, but every single person that I interacted with from Integrity was awesome: especially for dealing with my frequent questions. I was completely lost on how the remodeling process works but they made sure I understood every step of the way. Apart from being friendly the work was top notch. 5 stars...would recommend."
          additionalText=" "

          iconSrc={MariamIcon}
        />

        {/* User 2 */}
        <Review
          user="Jessica P."
          date="2023-11-17"
          initialText="Waras and his team did a great job with our roof. They fixed our leak and were really good at keeping us in the loop during the whole job. They checked everything carefully and made sure there were no other problems.

          They were always clear about what they were doing and what materials they were using. This made us feel really comfortable. They were also neat and kept our place clean every day.
          
          They worked fast but did a solid job, sticking to the time and money we agreed on. Our new roof looks good and makes our house look better.
          
          In short, Waras and his team fixed our problem well and gave us a strong, nice-looking roof. We'd tell anyone who needs roof work to call them."
          additionalText=" "

          iconSrc={JessicaIcon} // Use the appropriate individual icon for Jessica P.
        />

        {/* User 3 */}
        <Review
          user="Cat C."
          date="2023-11-21"
          initialText="I got recommended by a friend about Top Down Restoration to redo the roof of my house. I am extremely pleased with the outcome!
          The team was professional, worked efficiently, and paid great attention to detail. The difference they made is clearly visible, and our house feels more secure and well-maintained. Definitely looking forward to working with Top Down Restoration again in the future."
          additionalText=" "

          iconSrc={CatIcon} 
        />

        {/* User 4 */}
        <Review
          user="Wenxin L."
          date="2023-06-07"
          initialText="Waras and his team are true professionals in the roofing industry. They replaced our roof flawlessly, ensuring that there are no more leaks. The efficiency and attention to detail they displayed were remarkable. I wholeheartedly recommend Waras and his team for their exceptional roofing services."
          additionalText=" "
          iconSrc={WenxinIcon} 
        />

        {/* User 5 */}
        <Review
          user="David A."
          date="2023-06-04"
          initialText= "I called Waras to see if they can perform work on my pops home that's outside of the company area of expertise. He inquired what kind of job I wanted. Told him and Waras notified me that he wouldn't be able to do the job as he wasn't specialized in it. I really like that because rather than taking a job for an easy sale like most would do, he was honest with me. What really got me to make a Yelp review was when he provided me with solid advice. Rather than ending the call because there's no sale to be made, he notified me of a company that might be able to help in terms of providing a diagnostic service for the problem I had. Although no sale was made today, it has gotten me to consider them for the future."
          additionalText=" "

          iconSrc={DavidIcon} 
        />

 
      </div>
    </div>
  );
};

export default App;