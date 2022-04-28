import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    showCart: true,
    items: [
        {
            id: 'p1',
            title: 'first product',
            price: 6,
            description: 'This is a first product - amazing!',
            quantity: 3
        },
        {
            id: 'p2',
            title: 'second product',
            price: 10,
            description: 'This is a second product - wooot!',
            quantity: 2
        }
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        addToCart(state, action) {
            const { id } = action.payload;

            const existingProduct = state.items.find((item) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity++;
                return;
            }

            const productToAdd = {
                ...action.payload,
                quantity: 1
            };
            state.items.push(productToAdd);
        },
        incrementQuantity(state, action) {
            const id = action.payload;

            const existingProduct = state.items.find((item) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity++;
                return;
            }
            throw new Error('No product with provided id');
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
