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
        <li><a href="https://platform.stability.ai/docs/getting-started" target='_blank'>Documentation</a></li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li className='list-heading'>Learn</li>
        <li>Courses</li>
        <li>Blogs</li>
        <li>Training</li>
      </ul>
      <ul>
        <li className='list-heading'>Terms & Policies</li>
        <li>Terms</li>
        <li>Policies</li>
        <li>Documents</li>
      </ul>
      <ul>
        <li className='list-heading'>Contact Us</li>
        <li>Email</li>
        <li>Phone</li>
        <li>Patreon</li>
      </ul>
      </div>
      </footer>
    </>
  )
}

export default Footer
