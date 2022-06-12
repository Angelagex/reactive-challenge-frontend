import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import providerReducer from './slices/providerSlice'

export const store = configureStore({
    reducer: {
        provider: providerReducer,
        product: productReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch