import {createStore, applyMiddleware, combineReducers} from 'redux';
import {HYDRATE, createWrapper} from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import tickReducer from './tick/reducer.js';
import imageReducer from './image/reducer.js';


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const combinedReducer = combineReducers({
  tick: tickReducer,
  image: imageReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return combinedReducer(state, action);
}

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
