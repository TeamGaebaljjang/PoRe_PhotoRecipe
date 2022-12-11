import { createSlice } from '@reduxjs/toolkit';

const initialExampleState = { current: false };

const exampleSlice = createSlice({
  name: 'example',
  initialState: initialExampleState,
  reducers: {
    reducerName(state) {
      state.current = !state.current;
    },
  },
});

export const exampleActions = exampleSlice.actions;

export default exampleSlice;
