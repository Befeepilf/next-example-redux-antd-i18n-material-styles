import {moviesActionTypes} from './actions.js';

const initialState = {};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case moviesActionTypes.SET_CONFIG_LOADING:
            return {
                ...state,
                config: {
                    ...state.config,
                    loading: true
                }
            };
        case moviesActionTypes.SET_CONFIG:
            return {
                ...state,
                config: {
                    ...state.config,
                    data: action.payload,
                    loading: false
                }
            };
        case moviesActionTypes.SET_CONFIG_ERROR:
            return {
                ...state,
                config: {
                    ...state.config,
                    error: action.error,
                    loading: false
                }
            };


        case moviesActionTypes.SET_NOW_PLAYING_LOADING:
            return {
                ...state,
                nowPlaying: {
                    ...state.nowPlaying,
                    loading: true
                }
            };
        case moviesActionTypes.SET_NOW_PLAYING:
            return {
                ...state,
                nowPlaying: {
                    ...state.nowPlaying,
                    data: action.payload,
                    loading: false
                }
            };
        case moviesActionTypes.SET_NOW_PLAYING_ERROR:
            return {
                ...state,
                nowPlaying: {
                    ...state.nowPlaying,
                    error: action.error,
                    loading: true
                }
            };

        default:
            return state;
    }
}