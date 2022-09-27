import '../ItemCart/ItemCart.css';
import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.alt} ></img>
            <div>
                <p>Marca: {product.brand}</p>
                <p>Modelo: {product.model}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price} </p>
                <button onClick={() => removeProduct(product.id)} >Eliminar</button>
            </div>
        </div>
    )
}
