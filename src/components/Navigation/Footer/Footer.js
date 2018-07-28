// @flow
import * as React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer-container">
            <span>&copy; {year} - My Cellar</span>
        </footer>
    );
};

export default Footer;
