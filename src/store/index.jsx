import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from './exampleSlice';

const store = configureStore({
  reducer: { example: exampleReducer },
});

export default store;
