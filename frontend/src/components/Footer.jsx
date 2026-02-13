import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="footer-content" id="footer-content" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                <div className="content1">
                    <img src="/Logo.jpeg" alt="Logo" />
                    <p>© 2024 NRGK. All rights reserved.</p>
                </div>
                <div className="content1">
                    <h5>Contact Us</h5>
                    <ul>
                        <li>123 NRGK Street, New York, NY 10001</li>
                        <li>Email: info@nrgkfashion.com</li>
                        <li>Phone: +1 (123) 456-7890</li>
                    </ul>
                </div>
                <div className="content1">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="content1">
                    <h5>Social Media:</h5>
                    <li> <a style={{ color: 'azure' }} href="https://x.com">Twitter</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
