import {ADD_COFFEE, SET_ERROR, SET_LOADING} from "./coffeeActions";

const initialState = {
    coffee: [],
    status: 'idle'
};

export const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COFFEE:
            return {...state, coffee: action.payload, status: 'fulled'}
        case SET_LOADING:
            return {...state, status: 'loading'}
        case SET_ERROR:
            return {...state, status: 'error'}
        default:
            return state;
    }
};

