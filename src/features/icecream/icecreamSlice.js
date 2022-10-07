import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },

  // extra reducers are, if we want to change state by other reducers action type
  // ex. when cake ordered we want to give one icecream free, so in that case
  // when cake ordered icecream should be decrease

  // First Way :
  // extraReducers: {
  //   ['cake/ordered']: (state, action) => {
  //     state.numOfIceCream--;
  //   },
  // },

  // Second Way :
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
