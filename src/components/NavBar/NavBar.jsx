import '../NavBar/NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <Navbar className='navBar' sticky='top' expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <div className='brand'>
                    <CartWidget />
                </div>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav className='nav'>
                <Nav.Link href='!inicio'>Inicio</Nav.Link> 
                <Nav.Link href='!productos'>Productos</Nav.Link>
                <Nav.Link href='!novedades'>Novedades</Nav.Link>
                <Nav.Link href='!nosotros'>Nosotros</Nav.Link>
                <Nav.Link href='!contacto'>Contacto</Nav.Link>
            </Nav>
            <Nav className='icon'>
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faCartShopping} />
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
