import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../axiosInstance';

const initialZoneState = {
  photoZoneData: [],
  error: null,
  loading: false,
};

export const getPhotoZone = createAsyncThunk(
  'photoZone/getPhotoZone',
  async (accountname) => {
    // const accountName = localStorage.getItem('accountname');
    const res = await api.get(`/product/${accountname}?limit=infinity`);
    return res.data;
  },
);

const photoZoneSlice = createSlice({
  name: 'photoZone',
  initialState: initialZoneState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotoZone.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getPhotoZone.fulfilled, (state, payload) => {
        state.error = null;
        state.loading = false;
        state.photoZoneData = payload;
      })
      .addCase(getPhotoZone.rejected, (state, payload) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const photoZoneAction = photoZoneSlice.actions;

export default photoZoneSlice.reducer;
