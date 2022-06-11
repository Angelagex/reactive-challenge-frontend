import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Provider {
    id: String,
    providerId: String,
    name: String
}

interface ProviderState {
    providers: Provider[]
}

const initialState: ProviderState = {
    providers: [
        {
            id: "test",
            providerId: "test",
            name: "test"
        }
    ]
}

export const providerSlice = createSlice({
    name: "producers",
    initialState,
    reducers: {
        getAllProviders: (state: ProviderState, action: PayloadAction<Provider[]>) => {
            return { ...state, providers: action.payload }
        },
        addProvider: (state: ProviderState, action: PayloadAction<Provider>)  => {
            const newProviders = [...state.providers, action.payload]
            return { ...state, providers: newProviders }
        },
        deleteProvider: (state: ProviderState, action: PayloadAction<Provider>) => {
            const newProviders = state.providers.filter(provider => provider.id != action.payload.id)
            return { ...state, providers: newProviders }
        },

    }

})
 
export const { addProvider, deleteProvider, getAllProviders } = providerSlice.actions
export default providerSlice.reducer
