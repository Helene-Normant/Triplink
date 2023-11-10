import React from "react";
import './footer.css';

function Footer() {
  return (
  <div className="footer-container" data-testid="footer-component">
    <div className='footer-items'>
  <h3 className='footer-mobile'>© 2023 Triplink, Inc.</h3>
  <hr className="line-footer" />
  <h3 className='footer-mobile'>Confidentialité</h3>
  <hr className="line-footer" />
  <h3 className='footer-mobile'>Conditions générales</h3>
  </div>
  </div>
  )};


export default Footer;