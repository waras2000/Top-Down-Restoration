import React from 'react';
import topdownlogo from './topdownlogo.png'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div style={{ 
      display: 'flex',
       alignItems: 'center',
        padding: '10px', 
        marginBottom:'0',
        height:'100px'
         }}>
     <img src={topdownlogo} alt="Logo" style={{ height: '100px', marginRight: '10px' }} />

      <div style={{
    display:'flex',
    flexDirection:'column', 
    background:'#135489',
    color:'white',
    padding:'20px',
    width:'100%',
    marginBottom:'0px'
    
    
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ paddingTop:'10px',marginLeft:'100px', marginRight: '50px' }}>347-896-2429</p>
          <p style={{ paddingTop:'10px',marginRight: '50px' }}>'Come Home to Quality'</p>
          <p style={{ paddingTop:'10px',marginRight: '50px' }}>Request a Free Estimate</p>



</div>
    </div>
    </div>
  );
};

export default Header;