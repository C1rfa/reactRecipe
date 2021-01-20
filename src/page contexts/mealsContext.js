import React from 'react';

import { getFilteredCategory, getFilteredByCountry } from './../api';

import { mealsReducer } from './../reducers/mealsReducer';

export const MealsContext = React.createContext();

const initialState = {
    name: null,
    meals: [],
};

export const MealsContextProvider = ({ children }) => {
    const [value, dispatch] = React.useReducer(mealsReducer, initialState);

    value.setMeals = (pageName, name) => {
        if (pageName === 'country') {
            getFilteredByCountry(name)
                .then( data => {
                    dispatch({ type: 'SET_MEALS', payload: { name: name, meals: data.meals } });
                });
        } else if (pageName === 'category') {
            getFilteredCategory(name)
                .then( data => {
                    dispatch({ type: 'SET_MEALS', payload: { name: name, meals: data.meals } });
                });
        }
    };

    return (
        <MealsContext.Provider value={ value }>
            { children }
        </MealsContext.Provider>
    );
};

