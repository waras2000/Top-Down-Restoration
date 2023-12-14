import logo from './logo.svg';
import Navbar from './NavBar/Navbar';
import Header from './NavBar/Above';
import Home from './FrontPage/FrontPage';
import AboutUs from './About Us/AboutUs'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact Us/ContactUs';

import Reviews from './Reviews/reviews'
import ServicesSummary from './Services/ServicesSummary'
import RoofingServices from './Services/RoofingServices';
import SidingServices from './Services/SidingServices';
import MasonryServices from './Services/MasonryServices';
import Gallery from './Gallery/Gallery';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/Services" element={<ServicesSummary/>}/>
          <Route path="/SidingServices" element={<SidingServices/>}/>
          <Route path="/MasonryServices" element={<MasonryServices/>}/>
          <Route path="/RoofingServices" element={<RoofingServices/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/ContactUs" element={<Contact/>}/>



          {/* Add more Route components for other pages */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
