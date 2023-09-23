import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingCartItem = state.products.find((item) => item.id === action.payload.id);

            if (existingCartItem) {
                existingCartItem.quantity += action.payload.quantity
            }
            else {
                state.products.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        increaseProductQty: (state, action) => {
            const CartItem = state.products.find((item) => item.id === action.payload);
            if (CartItem) {
                CartItem.quantity = CartItem.quantity + 1
            }
        },
        decreaseProductQty: (state, action) => {
            const CartItem = state.products.find((item) => item.id === action.payload);
            if (CartItem) {
                CartItem.quantity = CartItem.quantity - 1
            }
        },
    },
})


export const cartAction = cartSlice.actions
export default cartSlice.reducer