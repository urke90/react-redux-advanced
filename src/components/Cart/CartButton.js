import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const totalCartItems = useSelector(
        (state) => state.cartReducer.totalQuantity
    );

    const toggleCartHandler = () => dispatch(cartActions.toggleCart());

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalCartItems}</span>
        </button>
    );
};

export default CartButton;
