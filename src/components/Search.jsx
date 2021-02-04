import React from 'react';
import { Link } from 'react-router-dom';
 
import { MealsContext } from './../page contexts/mealsContext';

export const Search = () => {
    const { name, searchMeal, setName } = React.useContext(MealsContext);

    const onChange = e => {
        setName(e.target.value);
    };

    const onClick = () => {
        searchMeal();
    }


    return(
        <>
            <div className="row">
                <div className="input-field col s12">
                    <input type='search' value={ name } placeholder='search' onChange={ onChange }/>
                    <Link to={ `/search?name=${name}` } className="srch-btn btn grey darken-4" onClick={ onClick }> Search </Link>
                </div>
            </div>
        </>
    );
};