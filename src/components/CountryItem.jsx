import React from 'react';

import { Link } from 'react-router-dom';

export const CountryItem = props => {
    return(
        <div className="card-panel deep-orange darken-1">
            <span className="black-text country-name">{ props.strArea }</span>
            <div className="card-action">
                <Link to={ `/country/${props.strArea}` } className='btn grey darken-4'>See country meals</Link>
            </div>
        </div>
    );
};