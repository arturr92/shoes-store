import '../Cart/Cart.css';
import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Arturo',
            email: 'arturo@gmail.com',
            phone: '1131919129',
            address: 'Av. Corrientes 1234'
        },
        items: cart.map(product => ({ id:product.id, brand: product.brand, model: product.model, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if(cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/' style={{color: 'blue'}}>Hacer compras</Link>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: ${totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir compra</button>
        </>
    )
}
