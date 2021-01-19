import { API_URL } from './config';

const getMealById = async mealId => {
    const response = await fetch(API_URL + '/lookup.php?i=' + mealId);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + '/categories.php');
    return await response.json();
};

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + '/filter.php?c=' + catName);
    return await response.json();
};

const getAllCountries = async () => {
    const response = await fetch(API_URL + '/list.php?a=list');
    return await response.json();
};

const getFilteredByCountry = async countryName => {
    const response = await fetch(API_URL + '/filter.php?a=' + countryName);
    return await response.json();
};

const searchMeal = async searchStr => {
    let response = null;
    if (searchStr.length > 1) {
        response = await fetch(API_URL + '/search.php?s=' + searchStr);
    } else {
        response = await fetch(API_URL + '/search.php?f=' + searchStr);
    }
    return await response.json();
};


export { getMealById, getFilteredCategory, getAllCategories, getAllCountries, getFilteredByCountry, searchMeal };