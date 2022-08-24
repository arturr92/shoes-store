import { Button, ButtonGroup } from 'react-bootstrap';
import React, {useState } from 'react';
import '../ItemCount/ItemCount.css';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrease = () => setCount(count - 1);
    const increase = () => setCount(count + 1);

    return (
        <div className='counter'>
            <ButtonGroup aria-label="Basic example">
                <Button disabled = {count <= 1} onClick={decrease} variant="primary">-</Button>
                <span className='counter-span'>{count}</span>
                <Button disabled = {count >= stock} onClick={increase} variant="primary">+</Button>
            </ButtonGroup>
            <div className='button'>
                <Button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}
