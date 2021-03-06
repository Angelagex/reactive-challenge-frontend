import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import productReducer from "./slices/productSlice";
import providerReducer from "./slices/providerSlice";
import receiptReducer from "./slices/receiptSlice";

export const store = configureStore({
    reducer: {
        provider: providerReducer,
        product: productReducer, 
        receipt: receiptReducer,
        login: loginReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch