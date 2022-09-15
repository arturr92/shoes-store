import '../ItemList/ItemList.css';
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Nuestros Productos</h1>
                <div className="row">
                    {products.map( product => <Item  key={product.id} id={product.id} img={product.img} brand={product.brand} model={product.model} price={product.price} alt={product.alt} />)}
                </div>
            </div>
        </div>
    )
}
