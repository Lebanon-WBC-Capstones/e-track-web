import React, { createContext, useReducer } from 'react';
import { initialState } from './data.js';

export const StateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    case 'SET_EVENTS':
      return { ...state, events: action.payload };
    case 'SET_Trackers':
      return { ...state, trackers: action.payload };
    case 'SET_COLLECTION':
      return { ...state, collection: action.payload };
    case 'SET_INTEREST':
      return { ...state, interest: action.payload };
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
