import React from 'react';

import { HomeContext } from './../page contexts/homeContext';

import { CountryItem } from './CountryItem';

export const CountryList = () => {
    const { countries } = React.useContext(HomeContext);

    const items = countries.map( (item, ind) => {
        return <CountryItem key={ ind } {...item}/>
    });

    return(
        <div className='item-grid'>
            { items }
        </div>
    );
};