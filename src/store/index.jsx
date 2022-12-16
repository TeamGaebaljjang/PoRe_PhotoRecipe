import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice from './userInfoSlice';

const store = configureStore({
  reducer: { userInfo: userInfoSlice },
});

export default store;
