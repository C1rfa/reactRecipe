/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useLocation } from 'react-router-dom';

import { MealsContext } from './../page contexts/mealsContext';

import { Preloader } from './../components/Preloader';
import { MealList } from './../components/MealList';


export const Meals = () => {
    const { meals, name, setMeals, searchMeal, setDefault } = React.useContext(MealsContext);
    const { pathname, search } = useLocation();

    React.useEffect(() => {
        if(search) {
            const params = new URLSearchParams(search);
            searchMeal(params.get('name'));
        }
    }, []);

    React.useEffect(() => {
        const params = pathname.split('/').filter(Boolean);
        setMeals(...params);
    }, [name, pathname, setMeals]);

    React.useEffect(() => {
        return () => {
            setDefault();
        }
    }, []);

    return (
        <>
            { meals === null ? 
                <div className="text-primary">
                    <span className='text'>Sorry, we didnt find anything</span>
                </div>
                : meals.length ?
                    <div className="text-primary">
                        <span className='text'>{name} meals</span>
                        <div className="item-grid">
                            <MealList/>
                        </div>
                    </div> 
                : <Preloader/> 
            }
        </>
    );
};