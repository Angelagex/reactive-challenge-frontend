import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id?: String,
    name: string,
    description: String,
    price: Number,
    provider: String,
    maxAmount: Number,
    minAmount: Number,
    amount: number
}

interface ProductState {
    productToEdit: Product
    products: Product[]
    order: Product[]
    receipt: Product[]
}

const initialState: ProductState = {
    productToEdit: {
        id: "test",
        name: "Hammer",
        description: "Common Hammer",
        price: 10000,
        provider: "Juan",
        maxAmount: 50,
        minAmount: 10,
        amount: 0
    },
    products: [
        {
            id: "test",
            name: "Hammer",
            description: "Common Hammer",
            price: 10000,
            provider: "Juan",
            maxAmount: 50,
            minAmount: 10,
            amount: 0
        }
    ],
    order: [
        {
            id: "test",
            name: "Hammer",
            description: "Common Hammer",
            price: 10000,
            provider: "Juan",
            maxAmount: 50,
            minAmount: 10,
            amount: 0
        }
    ],
    receipt: [
        {
            id: "asd",
            name: "Hammer",
            description: "Common Hammer",
            price: 10000,
            provider: "Juan",
            maxAmount: 50,
            minAmount: 10,
            amount: 0
        }
    ]
}

export const productSlice = createSlice({
    name: "producers",
    initialState,
    reducers: {
        getAllProducts: (state: ProductState, action: PayloadAction<Product[]>) => (
            { ...state, products: action.payload }
        ),
        addProduct: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, products: [...state.products, action.payload] }
        ),
        updateProduct: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, products: [...state.products.filter(product => product.id != action.payload.id ?
                product : action.payload)] }
        ),
        deleteProduct: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, products: [...state.products.filter(product => product.id != action.payload.id)] }
        ),
        getOrder: (state: ProductState, action: PayloadAction<Product[]>) => (
            { ...state, order: action.payload }
        ),
        addProductToOrder: (state: ProductState, action: PayloadAction<Product>) => (
            state.order.find(item => item.id == action.payload.id) == undefined
            ? { ...state, order: [...state.order, action.payload] }
            : {...state}
        ),
        updateProductToOrder: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, order: [...state.order.filter(product => product.id != action.payload.id ?
                product : action.payload)] }
        ),
        deleteProductInOrder: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, order: [...state.order.filter(product => product.id != action.payload.id)] }
        ),
        clearOrder: (state: ProductState, action: PayloadAction<void>) => (
            { ...state, order: initialState.order }
        ),
        getReceipt: (state: ProductState, action: PayloadAction<Product[]>) => (
            { ...state, receipt: action.payload }
        ),
        addProductToReceipt: (state: ProductState, action: PayloadAction<Product>) => (
            state.receipt.find(item => item.id == action.payload.id) == undefined
            ? { ...state, receipt: [...state.receipt, action.payload] }
            : {...state}
        ),
        updateProductToReceipt: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, receipt: [...state.receipt.filter(product => product.id != action.payload.id), action.payload] } 
        ),
        deleteProductInReceipt: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, receipt: [...state.receipt.filter(product => product.id != action.payload.id)] }
        ),
        clearReceipt: (state: ProductState, action: PayloadAction<void>) => (
            { ...state, receipt: initialState.order }
        ),
        updateProductToEdit: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, productToEdit: action.payload }
        ),
        clearProductToEdit: (state: ProductState, action: PayloadAction<void>) => (
            { ...state, productToEdit: initialState.productToEdit }
        ),
    }
})

export const { addProduct, deleteProduct, getAllProducts, 
    addProductToOrder, clearOrder, clearProductToEdit, 
    deleteProductInOrder, getOrder, updateProductToEdit, updateProduct,
    addProductToReceipt, clearReceipt, deleteProductInReceipt, getReceipt,
    updateProductToOrder, updateProductToReceipt } = productSlice.actions

export default productSlice.reducer
