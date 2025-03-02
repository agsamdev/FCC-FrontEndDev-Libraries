// src/redux/reducers.js
import { SET_QUOTE, SET_COLOR } from './actions';

const initialState = {
  quote: { quote: '', author: '' },
  color: '#FFFFFF',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      return { ...state, quote: action.payload };
    case SET_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default rootReducer;