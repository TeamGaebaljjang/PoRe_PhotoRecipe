import { configureStore } from '@reduxjs/toolkit';
import followSlice from './followSlice';

const store = configureStore({
  reducer: { follow: followSlice },
});

export default store;
