import React from 'react';

export const Footer = () => {
    return(
        <footer className="page-footer deep-orange darken-4">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} for Portfolio
            </div>
          </div>
        </footer>
    );
};