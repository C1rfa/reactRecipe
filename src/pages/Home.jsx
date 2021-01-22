/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { HomeContext } from './../page contexts/homeContext';

import { Search } from './../components/Search';
import { Preloader } from './../components/Preloader';
import { CategoryList } from './../components/CategoryList';
import { CountryList } from './../components/CountryList';

export const Home = () => {
    const { categories, getCategories, countries, getCountries } = React.useContext(HomeContext);

    React.useEffect( () => {
        getCategories();
        getCountries();
    }, []);

    return(
        <>
            <Search/>
            <div className="text-primary">
                <span className='text'>To see meals select category</span>
            </div>
            <div className="item-stand">
                { categories.length ? <CategoryList/> : <Preloader/> }
            </div>
            <div className="text-primary">
                <span className='text'>or country</span>
            </div>
            <div className="item-stand">
                { countries.length ? <CountryList/> : <Preloader/> }
            </div>
        </>
    );
};