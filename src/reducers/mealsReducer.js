export const mealsReducer = (state, {type, payload}) => {
    switch(type) {
        case 'SET_MEALS':
            return {
                name: payload.name,
                meals: payload.meals,
            };
        case 'SET_NAME':
                return {
                    ...state,
                    name: payload.name,
                };
        default:
            return state;
    }
};