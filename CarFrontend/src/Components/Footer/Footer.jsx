import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo + About */}
        <div className="footer-col">
          <h2 className="footer-logo">V-Car CarRental</h2>
          <p className="footer-about">
            Drive your dream car at affordable prices. 
            We provide hassle-free car rental services with top-notch support.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Car Rentals</a></li>
            <li><a href="#">Corporate Deals</a></li>
            <li><a href="#">Luxury Cars</a></li>
            <li><a href="#">Long-Term Rentals</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: support@carrental.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} V-Car CarRental. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
