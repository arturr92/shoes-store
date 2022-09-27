import '../ItemDetail/ItemDetail.css';

import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export const ItemDetail = ({detailData}) => {
    
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(detailData, quantity);
    } 
    
    return (
        <div className='container__detail'>
            
            {
                <div className="details" key={detailData.id}>
                    <div className=".img__details">
                        <img src={detailData.img} alt={detailData.alt}/>
                    </div>
                    <div className="box">
                    <div className="row">
                        <h2>{detailData.brand}</h2>
                        <span>${detailData.price}</span>
                    </div>
                        <p>{detailData.model}</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae hic veritatis a! Nostrum nobis ab, illo magnam quae vero.</p>
                    {
                        goToCart 
                        ? <Link to='/cart'style={{color:'blue'}}>Terminar compra</Link>
                        : <ItemCount
                            initial = {1}
                            stock = {8}
                            onAdd = {onAdd}
                            />
                    }
                </div>
            </div>
            }
        </div>
    );
}
