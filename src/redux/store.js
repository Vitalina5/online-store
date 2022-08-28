import { configureStore } from '@reduxjs/toolkit';
import purse from './purseSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
     purse, 
     cart
  },
})