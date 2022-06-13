import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

export interface Receipt {
    id?: String,
    ReceiptproviderName: String,
    ReceiptproviderId: String
    date: String
    order: Product[]
}

interface ReceiptState {
    receipts: Receipt[]
}

const initialState: ReceiptState = {
    receipts: []
}

export const receiptSlice = createSlice({
    name: "receipts",
    initialState,
    reducers: {
        getAllReceipts: (state: ReceiptState, action: PayloadAction<Receipt[]>) => (
            {...state, receipts: action.payload}
        ),
        addReceipt: (state: ReceiptState, action: PayloadAction<Receipt>)  => (
             {...state, receipts: [...state.receipts, action.payload]} 
        ),
        deleteReceipt: (state: ReceiptState, action: PayloadAction<Receipt>) => (
             { ...state, receipts: [...state.receipts.filter(receipt => receipt.id != action.payload.id)]}
        ),
    }
})
 
export const { addReceipt, deleteReceipt, getAllReceipts } = receiptSlice.actions
export default receiptSlice.reducer
