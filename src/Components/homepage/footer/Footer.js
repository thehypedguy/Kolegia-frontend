import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer3 section__padding" id="footer">
    <div className="footer-links3">
      <div className="footer-links_div3">
        <h2>Team</h2>
        <p><a href="" target="_blank">Samarth Singh Bhadauria</a></p>
        <p><a href="https://www.linkedin.com/in/adityapandey2607/" target="_blank">Aditya Pamdey</a></p>
        
        <p><a href="https://www.linkedin.com/in/adarsh-aryan-364b78201/" target="_blank">Adarsh Aryan</a></p>
      </div>
      <div className="footer-links_div3">
        <h2>Company</h2>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-links_div3">
        <h2>Get in touch</h2>
        <p>kolegia.app@gmail.com</p>
        <p>7564820105</p>
        <p>1800 200 100</p>
      </div>
    </div>

    <div className="footer-copyright3">
      <p>@2022 Kolegia</p>
      <p>All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
