import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../axiosInstance';

const initialFeedState = {
  feedData: [],
  error: null,
  loading: false,
};

export const getFeed = createAsyncThunk('feed/getFeed', async (accountname) => {
  const res = await api.get(`/post/${accountname}/userpost`);
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
