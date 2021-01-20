import React from 'react';

import { Link } from 'react-router-dom';

export const MealItem = props => {
    return(
        <div className="card red darken-1">
            <div className="card-image">
              <img src={ props.strMealThumb } alt={ props.strMeal }/>
            </div>
            <div className="card-content">
              <p>{ props.strMeal }</p>
            </div>
            <div className="card-action">
              <Link to={`/recipe/${props.idMeal}`} className='btn grey darken-4'>Open</Link>
            </div>
        </div>
    );  
};