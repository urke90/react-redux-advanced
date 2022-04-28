import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: true,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
