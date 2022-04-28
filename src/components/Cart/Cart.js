import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cartReducer.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
