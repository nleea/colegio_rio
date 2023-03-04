import { configureStore } from '@reduxjs/toolkit'
import Isload from "../features/load";

export const store = configureStore({
    reducer: {
        store: Isload,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch