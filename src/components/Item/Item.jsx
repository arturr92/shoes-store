import { Link } from 'react-router-dom';
import '../Item/Item.css';

export const Item = ({img, brand, model, price, alt, id}) => {

    return (
            <div className='card'>
                <div className="imgBx">
                    <img src={img} alt={alt} />
                </div>
                <div className="details">
                    <h3>{brand}</h3>
                    <h4>{model}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, provident.</p>
                    <h4>Size</h4>
                    <ul className="size">
                        <li>36</li>
                        <li>38</li>
                        <li>40</li>
                        <li>42</li>
                        <li>44</li>
                    </ul>
                    <div className='group'>
                        <h2><sup>$</sup>{price}</h2>
                        <Link to={`/detalle/${id}`} className='btn'>Ver Detalles</Link>
                    </div>
                </div>
            </div>
    )
}

