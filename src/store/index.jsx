import { configureStore } from '@reduxjs/toolkit';
import followSlice from './followSlice';
import photoZoneSlice from './photoZoneSlice';
import feedSlice from './feedSlice';

const store = configureStore({
  reducer: { follow: followSlice, photoZone: photoZoneSlice, feed: feedSlice },
});

export default store;
