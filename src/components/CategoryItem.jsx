import React from 'react';

import { Link } from 'react-router-dom';

export const CategoryItem = props => {
    return(
              <div className="card red darken-1">
                <div className="card-image">
                  <img src={ props.strCategoryThumb } alt={ props.strCategory }/>
                  <span className="card-title">{ props.strCategory }</span>
                </div>
                <div className="card-content">
                  <p>{ props.strCategoryDescription }</p>
                </div>
                <div className="card-action">
                  <Link to={`category/${props.idCategory}`} className='btn grey darken-4'>See meals</Link>
                </div>
              </div>
    );
};