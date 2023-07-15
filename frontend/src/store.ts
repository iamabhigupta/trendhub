import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export default store;
