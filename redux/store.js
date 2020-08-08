import {createStore, applyMiddleware, combineReducers} from 'redux';
import {HYDRATE, createWrapper} from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import moviesReducer from './movies/reducer.js';


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const combinedReducer = combineReducers({
  movies: moviesReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    // merge server-side and client-side stores
    return {
      ...state,
      ...action.payload
    };
  }

  return combinedReducer(state, action);
}

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
