import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Istore {
  isLoad: boolean;
  isAuth: boolean;
  isError: string;
  selectUsers: Array<any>;
}

const initialState: Istore = {
  isLoad: false,
  isAuth: false,
  isError: "",
  selectUsers: []
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
    selectUser: (state, action: PayloadAction<Partial<Istore>>) => {
      state.selectUsers = action.payload.selectUsers!;
    }
  },
});

export const { onLoad, isAuth, isError,selectUser } = counterSlice.actions;

export default counterSlice.reducer;
