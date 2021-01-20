export const mealsReducer = (state, {type, payload}) => {
    switch(type) {
        case 'SET_MEALS':
            return {
                name: payload.name,
                meals: payload.meals,
            };
        default:
            return state;
    }
};