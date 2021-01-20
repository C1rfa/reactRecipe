import React from 'react';

import { MealsContext } from './../page contexts/mealsContext';

import { MealItem } from './MealItem';

export const MealList = () => {
    const { meals } = React.useContext(MealsContext);

    const items = meals.map(item => <MealItem key={ item.idMeal } {...item}/>)    
    
    return(
        <>
            { items }
        </>
    );  
};