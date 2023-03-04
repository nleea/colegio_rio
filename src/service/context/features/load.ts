import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Istore {
  isLoad: boolean;
  isAuth: boolean;
}

const initialState: Istore = {
  isLoad: false,
  isAuth: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    onLoad: (state, action: PayloadAction<Partial<Istore>>) => {
      state.isLoad = action.payload.isLoad!;
    },
    isAuth: (state, action: PayloadAction<Partial<Istore>>) => {
      state.isAuth = action.payload.isAuth!;
    },
  },
});

export const { onLoad, isAuth } = counterSlice.actions;

export default counterSlice.reducer;
