export const homeReducer = (state, {type, payload}) => {
    switch(type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: payload.categories,
            };
        case 'SET_COUNTRIES':
            return {
                ...state,
                countries: payload.countries,
            };
        default:
            return state;
    }
};