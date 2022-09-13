import { useState } from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
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
                        <Link to="/">Inicio</Link>
                        <Link to="/productos">Productos</Link>
                        <Link to="/novedades">Novedades</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/contactos">Contactos</Link>
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
