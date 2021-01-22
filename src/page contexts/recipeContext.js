import React from 'react';

import { getMealById } from './../api';

import { recipeReducer } from './../reducers/recipeReducer';

export const RecipeContext = React.createContext();

const initialState = {
    meal: {},
};

export const RecipeContextProvider = ({ children }) => {
    const [value, dispatch] = React.useReducer(recipeReducer, initialState);

    value.setMeal = id => {
        getMealById(id)
            .then(data => {
                dispatch({ type: 'SET_MEAL', payload: { meal: data.meals[0] } });
            });
    };

    value.setDefault = () => {
        dispatch({ type: 'SET_MEAL', payload: { meal: {} } });
    };

    return (
        <RecipeContext.Provider value={ value }>
            { children }
        </RecipeContext.Provider>
    );
}