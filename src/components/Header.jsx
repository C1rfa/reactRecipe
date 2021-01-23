import React from 'react';

import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <nav className="deep-orange darken-4">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo"><i className="material-icons">receipt</i>React Receipt</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><a href="https://github.com/C1rfa/reactRecipe">Repository</a></li>
            </ul>
            </div>
        </nav>
    );
};