import {imageActionTypes} from './actions.js';

const initialState = {};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case imageActionTypes.SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case imageActionTypes.SET_IMAGE:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case imageActionTypes.SET_ERROR:
            return {
                ...state,
                loading: false,
                error: actiom.error
            };
        default:
            return state;
    }
}