import { createSlice, current } from '@reduxjs/toolkit';

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
        },
        addToCart(state, action) {
            const { id, price } = action.payload;

            const existingProduct = state.items.find((item) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.total =
                    existingProduct.quantity * existingProduct.price;
                return;
            }

            const productToAdd = {
                ...action.payload,
                quantity: 1,
                total: 1 * price
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
