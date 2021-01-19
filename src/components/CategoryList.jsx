import React from 'react';

import { HomeContext } from './../page contexts/homeContext';

import { CategoryItem } from './CategoryItem';

export const CategoryList = () => {
    const { categories } = React.useContext(HomeContext);

    const items = categories.map( item => {
        return <CategoryItem key={ item.idCategory } {...item}/>
    });

    return(
        <div className='item-grid'>
            { items }
        </div>
    );
};