import React from 'react';

import { useLocation } from 'react-router-dom';

import { MealsContext } from './../page contexts/mealsContext';

import { Preloader } from './../components/Preloader';
import { MealList } from './../components/MealList';


export const Meals = () => {
    const { meals, name, setMeals } = React.useContext(MealsContext);
    const { pathname } = useLocation();

    React.useEffect(() => {
        const params = pathname.split('/').filter(Boolean);
        setMeals(...params);
    },[name]);

    return (
        <>
            { meals.length ? 
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