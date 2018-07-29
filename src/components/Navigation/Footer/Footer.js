// @flow
import * as React from 'react';

const Footer = (props) => (
    <footer className={props.className || ''}>
        <div className="text-center">
            <span className="mr-2">&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span className="mx-2">-</span>
            <span>My Cellar</span>
        </div>
    </footer>
);

export default Footer;
