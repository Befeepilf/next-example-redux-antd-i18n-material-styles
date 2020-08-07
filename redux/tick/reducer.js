import {tickActionTypes} from './actions.js';

const initialState = {
  lastUpdate: 0,
  light: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case tickActionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      };

    default:
      return state;
  }
}
