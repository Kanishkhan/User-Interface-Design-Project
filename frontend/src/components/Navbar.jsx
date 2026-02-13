import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <Link to="/" class="logo">NRGK</Link>
            <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></div>
            <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/mens">Mens</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kids">Kids</Link></li>
                <li><Link to="/shoes">Shoes</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <div className="icons">
                <a href="#"></a>
            </div>
        </header>
    );
};

export default Navbar;
