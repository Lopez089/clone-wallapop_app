import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'features/product/product'

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});
