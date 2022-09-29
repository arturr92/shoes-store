import { useState } from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from '../CartWidget/CartWidget';
import BurguerButton from '../BurguerButton/BurguerButton';
import { useCartContext } from '../../context/CartContext';

export const NavBar = () => {
    
    const {totalProducts} = useCartContext();

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (    
        <nav className='nav'>
                <CartWidget className='brand'/>
                <div className={`nav__links  ${clicked ? 'active' : ''}`}>
                        <Link to="/">Inicio</Link>
                        <Link to="/categoria/nike">Nike</Link>
                        <Link to="/categoria/adidas">Adidas</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/contactos">Contactos</Link>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} className='icon' />
                            <span>{totalProducts() || ''}</span>
                        </Link>
                        {/* <FontAwesomeIcon icon={faUser} className='icon' /> */}
                </div>
                <div className='burguer'>
                    <BurguerButton clicked ={clicked} handleClick={handleClick} />
                </div>
                <div className={`bg ${clicked ? ' active' : ''}`}>
                </div>
        </nav>
    )
}
