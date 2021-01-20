export const recipeReducer = (state, {type, payload}) => {
    switch(type) {
        case 'SET_MEAL':
            return {
               meal: payload.meal,
            };
        default:
            return state;
    }
};