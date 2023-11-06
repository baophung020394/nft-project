// src/store/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import cardReducer from 'store/reducers/cardSlice';

const rootReducer = combineReducers({
  // your reducers here
  card: cardReducer,
});

export default rootReducer;
