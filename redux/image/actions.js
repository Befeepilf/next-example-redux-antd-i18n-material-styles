export const imageActionTypes = {
    SET_LOADING : 'image/setLoading',
    SET_IMAGE: 'image/setImage',
    SET_ERROR: 'image/setError'
};


export const setImage = () => {
    return async dispatch => {
        dispatch({type: imageActionTypes.SET_LOADING});
        setTimeout(() => {
            fetch('https://random.dog/woof.json')
                .then(res => res.json())
                .then(({url}) => dispatch({type: imageActionTypes.SET_IMAGE, payload: url}))
                .catch(error => dispatch({type: imageActionTypes.SET_ERROR, error}));
        }, 2000);
    }
}