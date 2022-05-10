import {ADD_COFFEE, SET_ERROR, SET_LOADING} from "./coffeeActions";
import { allCoffee} from "../api/coffeAPI";
import axios from "axios";

const addCoffee = (payload) => {
    return {
        type: ADD_COFFEE,
        payload
    }
}

const  setLoading = () => {
    return {
        type: SET_LOADING
    }
}

const  setError = () => {
    return {
        type: SET_ERROR
    }
}

export const loadCoffee = () => (dispatch) => {
    dispatch(setLoading())
    axios.get(allCoffee())
        .then(data => dispatch(addCoffee(data.data)))
        .catch(error => dispatch(setError()))
}