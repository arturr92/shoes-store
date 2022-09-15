import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const ItemDetail = ({detailData}) => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = () => {
        setGoToCart(true);
    } 
    
    return (
        <div className='container__detail'>
            {
                detailData.map( detail => {
                    return(
                        <div className="details" key={detail.id}>
                            <div className=".img__details">
                                <img src={detail.img} alt={detail.alt}/>
                            </div>

                            <div className="box">
                                <div className="row">
                                <h2>{detail.brand}</h2>
                                <span>${detail.price}</span>
                                </div>

                                <p>{detail.model}</p>
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
            </div>)})
            }
        </div>
    );
}
