import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Isload {
  isLoad: boolean;
}

const initialState: Isload = {
  isLoad: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    onLoad: (state, action: PayloadAction<boolean>) => {
      state.isLoad = action.payload;
    },
  },
});

export const { onLoad } = counterSlice.actions;

export default counterSlice.reducer;
