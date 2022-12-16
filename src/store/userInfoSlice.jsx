import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk(
  'users/getUserData',
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await axios.get('api주소', userInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        errorMessage: '에러',
      });
    }
  },
);

const initialUserInfoState = { userData: {}, error: null, loading: false };

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialUserInfoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.userData = payload;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const getUserInfoAction = userInfoSlice.actions;

export default userInfoSlice.reducer;
