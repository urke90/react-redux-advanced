import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'first product',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        id: 'p2',
        title: 'second product',
        price: 9,
        description: 'This is a second product - wooot!'
    }
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(({ id, title, price, description }) => (
                    <ProductItem
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
