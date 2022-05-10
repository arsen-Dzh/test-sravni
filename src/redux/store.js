import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {coffeeReducer} from "./coffeeReducer";

export const store = createStore(coffeeReducer, composeWithDevTools(
    applyMiddleware(thunk)
    )
);