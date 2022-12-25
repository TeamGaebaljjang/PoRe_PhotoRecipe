import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialFeedState = {
  feedData: [],
  error: null,
  loading: false,
};

export const getFeed = createAsyncThunk('feed/getFeed', async (accountname) => {
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken = localStorage.getItem('token');
  const res = await axios.get(`${URL}/post/${accountname}/userpost`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json',
    },
  });
  return res.data;
});

const feedSlice = createSlice({
  name: 'feed',
  initialState: initialFeedState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeed.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getFeed.fulfilled, (state, payload) => {
        state.error = null;
        state.loading = false;
        state.feedData = payload;
      })
      .addCase(getFeed.rejected, (state, payload) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const photoZoneAction = feedSlice.actions;

export default feedSlice.reducer;
