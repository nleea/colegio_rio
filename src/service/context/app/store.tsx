import { configureStore } from '@reduxjs/toolkit'
import GeneralContext from "../features/load";

export const store = configureStore({
    reducer: {
        store: GeneralContext,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch