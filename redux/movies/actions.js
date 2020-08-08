const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '387f16fb803be6bc7b24776653309a77';

const tmdbRequest = url => fetch(`${BASE_URL}${url}?api_key=${API_KEY}`);


export const moviesActionTypes = {
    SET_CONFIG_LOADING: 'movies/config/setLoading',
    SET_CONFIG: 'movies/config/set',
    SET_CONFIG_ERROR: 'movies/config/setError',

    SET_NOW_PLAYING_LOADING : 'movies/nowPlaying/setLoading',
    SET_NOW_PLAYING: 'movies/nowPlaying/set',
    SET_NOW_PLAYING_ERROR: 'movies/nowPlaying/setError'
};


export const loadConfig = () => async dispatch => {
    dispatch({type: moviesActionTypes.SET_CONFIG_LOADING});

    try {
        const res = await tmdbRequest('/configuration');
        const config = await res.json();
        dispatch({type: moviesActionTypes.SET_CONFIG, payload: config});
    }
    catch(error) {
        dispatch({type: moviesActionTypes.SET_CONFIG_ERROR, error});
    }
}


export const loadNowPlaying = () => async dispatch => {
    dispatch({type: moviesActionTypes.SET_NOW_PLAYING_LOADING});

    try {
        const res = await tmdbRequest('/movie/now_playing');
        const nowPlaying = await res.json();
        dispatch({type: moviesActionTypes.SET_NOW_PLAYING, payload: nowPlaying});
    }
    catch(error) {
        dispatch({type: moviesActionTypes.SET_NOW_PLAYING_ERROR, error});
    }
}