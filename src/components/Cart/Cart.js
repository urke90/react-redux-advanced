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
                {cartItems.map(({ id, title, price, total, quantity }) => (
                    <CartItem
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        total={total}
                        quantity={quantity}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
