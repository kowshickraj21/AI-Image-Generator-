import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
      <p className='footer-logo colored'>Vincent.AI</p>
      <div className='footer-list'>
      <ul>
        <li className='list-heading'>Pages</li>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li className='list-heading'>Learn</li>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li className='list-heading'>Terms & Policies</li>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li className='list-heading'>Contact Us</li>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      </div>
      </footer>
    </>
  )
}

export default Footer
