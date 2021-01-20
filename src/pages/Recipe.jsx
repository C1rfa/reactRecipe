import React from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { RecipeContext } from './../page contexts/recipeContext';

import { Preloader } from './../components/Preloader';


export const Recipe = () => {
    const { setMeal, meal } = React.useContext(RecipeContext);
    const { id } = useParams();
    const { goBack } = useHistory();

    React.useEffect(() => {
        setMeal(id);
    }, [id]);

    return(
        <>
            { meal.idMeal ? 
                <div className="recipe">
                    <img src={ meal.strMealThumb } alt={ meal.strMeal }/>
                    <h1>{ meal.strMeal }</h1>
                    <h6>Category: { meal.strCategory }</h6>
                    { meal.strArea ? <h6>Area: { meal.strArea }</h6> : ''}
                    <p>{ meal.strInstructions }</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(meal).map(key => {
                                if(key.includes('Ingredient') && meal[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{ meal[key] }</td>
                                            <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                            })
                        }
                        </tbody>
                    </table>
                    { meal.strYoutube ? 
                        <div className='row'>
                            <h5>Video Recipe</h5>
                            <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} title={ meal.strMeal }></iframe>
                        </div> : ''}
                </div>
                : <Preloader/> }
                <button className="btn" onClick={ goBack }>Go Back</button>
        </>
    );
}