import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { cartActions } from './store/cart/cart';
import { sendCartData } from './store/cart/cart';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.cartReducer.showCart);
    const cart = useSelector((state) => state.cartReducer.items);

    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;

/**
 * ? SOMETHING LIKE THIS!?!??!?!?!?
 *
 * 1. before send set status to: PENDING
 * 2. if response is success set status to: SUCCESS
 * 3. if we have error set status to: ERROR
 *
 */
