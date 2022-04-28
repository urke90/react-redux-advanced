import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
    return (
        <Layout>
            <Cart />
            <Products />
        </Layout>
    );
}

export default App;

/**
 * 1. click on My Cart btn in header should toggle shopping cart component
 * 2. click on product will add product to the cart => if product exists then just increase quantity
 * 3. if user clicks ( - ) on item in shopping cart decrease quantity ===> if q = 1 then remove from cart
 */

/**
 * * STATE
 * 1. showCart ===> boolean
 * 2. cart ===> [] of products
 * 3. if we have different products we will need ID to differentiate them ( add uuid or React 18 hook)
 */
