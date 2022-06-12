import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id?: String,
    name: String,
    description: String,
    price: Number,
    provider: String,
    maxAmount: Number,
    minAmount: Number,
    amount: Number
}

interface ProductState {
    productToEdit: Product
    products: Product[]
    order: Product[]
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
            { ...state, order: [...state.products, action.payload] }
        ),
        deleteProductInOrder: (state: ProductState, action: PayloadAction<Product>) => (
            { ...state, order: [...state.products.filter(product => product.id != action.payload.id)] }
        ),
        clearOrder: (state: ProductState, action: PayloadAction<void>) => (
            { ...state, order: initialState.order }
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
    deleteProductInOrder, getOrder, updateProductToEdit, updateProduct } = productSlice.actions

export default productSlice.reducer
