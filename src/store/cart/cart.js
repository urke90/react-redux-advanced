import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { uiActions } from '../UI/ui';

const initialState = {
    showCart: true,
    items: [],
    totalQuantity: 0
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
            state.totalQuantity++;

            const existingProduct = state.items.find((item) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice += existingProduct.price;
                return;
            }

            const productToAdd = {
                ...action.payload,
                quantity: 1,
                totalPrice: 1 * price
            };
            state.items.push(productToAdd);
        },
        incrementQuantity(state, action) {
            const id = action.payload;

            const existingProduct = state.items.find((item) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice += existingProduct.price;
                state.totalQuantity++;
                return;
            }
            throw new Error('No product with provided id');
        },
        decrementQuantity(state, action) {
            const id = action.payload;
            state.totalQuantity--;

            const existingProduct = state.items.find((item) => item.id === id);

            if (!existingProduct) {
                throw new Error('No product found with provided ID');
            }

            if (existingProduct.quantity > 1) {
                existingProduct.quantity--;
                existingProduct.totalPrice -= existingProduct.price;
            } else {
                state.items = state.items.filter((item) => item.id !== id);
            }
        }
    }
});

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.put(
                'https://react-redux-advanced-max-default-rtdb.firebaseio.com/cart.json',
                cartData
            );

            console.log('response', response);
        };

        dispatch(uiActions.setPendingHttpStatus());

        try {
            await sendRequest();
            dispatch(uiActions.setSuccessHttpStatus());
        } catch (error) {
            dispatch(uiActions.setErrorHttpStatus());
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
