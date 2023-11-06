import logo from './logo.svg';
import Navbar from './NavBar/Navbar';
import Header from './NavBar/Above';
import Home from './FrontPage/FrontPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Reviews from './Reviews/reviews'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* Add more Route components for other pages */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
