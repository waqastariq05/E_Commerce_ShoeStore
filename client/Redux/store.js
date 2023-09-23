import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Redux/Slice/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})