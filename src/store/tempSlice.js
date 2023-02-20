import { createSlice } from '@reduxjs/toolkit';

const temporarySlice = createSlice({
  name: 'temporary',
  initialState: {
    theme: 'light',
    maincolor: '#6fa1bffc',
    showbox: 'none',
    counter: 0,
  },
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
    updateMaincolor: (state, action) => {
      state.maincolor = action.payload;
    },
    updateShowbox: (state, action) => {
      state.showbox = action.payload;
    },
    updateCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { updateTheme, updateMaincolor, updateShowbox, updateCounter } =
  temporarySlice.actions;

export default temporarySlice.reducer;
