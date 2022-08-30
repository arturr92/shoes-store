/* import {Container, Row} from 'react-bootstrap' */
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {products.map( product => <Item  key={product.id} productData = {product} />)}
            </div>
        </div>
    )
}
