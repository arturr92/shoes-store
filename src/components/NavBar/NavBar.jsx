import { useState } from 'react';
import '../NavBar/NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from '../CartWidget/CartWidget';
import BurguerButton from '../BurguerButton/BurguerButton';

export const NavBar = () => {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (    
        <nav className='nav'>
                <CartWidget className='brand'/>
                <div className={`nav__links  ${clicked ? 'active' : ''}`}>
                        <a onClick={handleClick} href="/">Inicio</a>
                        <a onClick={handleClick} href="/">Productos</a>
                        <a onClick={handleClick} href="/">Novedades</a>
                        <a onClick={handleClick} href="/">Nosotros</a>
                        <a onClick={handleClick} href="/">Contactos</a>
                        <FontAwesomeIcon icon={faCartShopping} className='icon' />
                        <FontAwesomeIcon icon={faUser} className='icon' />
                </div>
                <div className='burguer'>
                    <BurguerButton clicked ={clicked} handleClick={handleClick} />
                </div>
                <div className={`bg ${clicked ? ' active' : ''}`}>
                </div>
        </nav>
    )
}
