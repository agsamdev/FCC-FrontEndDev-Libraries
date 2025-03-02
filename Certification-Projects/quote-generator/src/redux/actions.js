// src/redux/actions.js
export const SET_QUOTE = 'SET_QUOTE';
export const SET_COLOR = 'SET_COLOR';

export const setQuote = (quote) => ({
  type: SET_QUOTE,
  payload: quote,
});

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: color,
});