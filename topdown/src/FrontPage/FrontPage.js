import React from 'react';
import './frontpage.css';
import Navbar from '../NavBar/Navbar'
const Body = () => {
    return (
        
        <div className="cat">
                <Navbar />

            <div className="center-div">
                <div className="License">
                    <span className="first-line">Licensed Contractor</span>
                    <br />
                    <span className="second-line">in Brooklyn, NY</span>
                    <br />
                    <span className="third-line">LIC#______</span>
                </div>
                <div className="BelowLicense">
                    <span>We only use the</span>
                    <br/>
                    <span>Best Materials for the Job</span>
                </div>
                <div className="contact-form">
    <div className="form-title">Request an Estimate Today</div>
    <input type="text" placeholder="Name" />
    <br />
    <input type="text" placeholder="Phone" />
    <br />
    <input type="text" placeholder="Email" />
    <br />
    <input type="text" placeholder="Service" />
    <br />
    <button type="submit">Submit</button>
</div>
            </div>

    

        </div>
    );
};

export default Body;