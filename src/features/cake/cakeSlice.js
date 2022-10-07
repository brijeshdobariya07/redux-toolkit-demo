import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    // In reducers we have to only write action, ex: CAKE_ORDERED will be
    // ordered reducer, by default it will recieve state as first parameter
    // and action as a second parameter
    ordered: (state) => {
      // In slice we can directly mutate the state because it uses immerjs
      // under the hood to make copy of state and make necessary changes
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
