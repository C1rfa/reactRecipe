/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { RecipeContext } from './../page contexts/recipeContext';

import { Preloader } from './../components/Preloader';


export const Recipe = () => {
    const { setMeal, setDefault, meal } = React.useContext(RecipeContext);
    const { id } = useParams();
    const { goBack } = useHistory();

    React.useEffect(() => {
        setMeal(id);
    }, [id]);


    React.useEffect(() => {
        return () => {
            setDefault();
        };
    }, []);


    const goBackHandler = () => {
        goBack();
    };

    const recipeTable = Object.keys(meal).map( key => {
        if(key.includes('Ingredient') && meal[key]) {
            return (
                <tr key={key}>
                    <td>{ meal[key] }</td>
                    <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                </tr>
            );
        }
    });

    return(
        <>
            { meal.idMeal ? 
                <div className="recipe">
                    <img className="main-image" src={ meal.strMealThumb } alt={ meal.strMeal }/>
                    <h1>{ meal.strMeal }</h1>
                    <h6>Category: { meal.strCategory }</h6>
                    { meal.strArea ? <h6>Area: { meal.strArea }</h6> : ''}
                    <p>{ meal.strInstructions }</p>
                    <h3 className="mesure">Ingredients and measures</h3>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                        { recipeTable }
                        </tbody>
                    </table>
                    { meal.strYoutube ? 
                        <div className='row'>
                            <h3 className="mesure">Video Recipe</h3>
                            <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} title={ meal.strMeal }></iframe>
                        </div> : ''}
                    <button className="btn" onClick={ goBackHandler }>Go Back</button>
                </div>
                : <Preloader/> }
        </>
    );
}