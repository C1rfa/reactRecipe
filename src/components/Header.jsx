import React from 'react';

import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <nav className="deep-orange darken-4">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo"><i className="material-icons">receipt</i>React Receipt</Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#!">ЗАПОЛНИТЕЛЬ</Link></li>
                <li><Link to="#!">ЗАПОЛНИТЕЛЬ</Link></li>
            </ul>
            </div>
        </nav>
    );
};