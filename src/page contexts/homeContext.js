import React from 'react';
import { getAllCategories, getAllCountries } from './../api';

import { homeReducer } from './../reducers/homeReducer';

export const HomeContext = React.createContext();

const initialState ={
    categories: [],
    countries: [],
};


export const ContextProvider = ({ children }) => {
    const [value, dispatch] = React.useReducer(homeReducer, initialState);

    value.getCategories = () => {
        getAllCategories()
            .then( data => {
                dispatch({type: 'SET_CATEGORIES', payload: { categories: data.categories }});
            });
    };

    value.getCountries = () => {
        getAllCountries()
            .then( data => {
                dispatch({type: 'SET_COUNTRIES', payload: { countries: data.meals }});
            });
    };

    return (
        <HomeContext.Provider value={ value }>
            { children }
        </HomeContext.Provider>
    );
};