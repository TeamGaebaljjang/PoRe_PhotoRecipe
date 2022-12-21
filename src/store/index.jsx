import { configureStore } from '@reduxjs/toolkit';
import followSlice from './followSlice';
import photoZoneSlice from './photoZoneSlice';

const store = configureStore({
  reducer: { follow: followSlice, photoZone: photoZoneSlice },
});

export default store;
