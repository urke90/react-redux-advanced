import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cart';
import uiReducer from './UI/ui';

export const store = configureStore({
    reducer: {
        cartReducer,
        uiReducer
    }
});
