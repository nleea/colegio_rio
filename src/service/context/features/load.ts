import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Istore {
  isLoad: boolean;
  isAuth: boolean;
  isError: string;
}

const initialState: Istore = {
  isLoad: false,
  isAuth: false,
  isError: "",
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
    isError: (state, action: PayloadAction<Partial<Istore>>) => {
      state.isError = action.payload.isError!;
    },
  },
});

export const { onLoad, isAuth, isError } = counterSlice.actions;

export default counterSlice.reducer;
