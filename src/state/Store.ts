import { configureStore } from "@reduxjs/toolkit";
import providerReducer from './slices/providerSlice'

export const store = configureStore({
    reducer: {
        provider : providerReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch