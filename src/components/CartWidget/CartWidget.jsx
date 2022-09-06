import '../CartWidget/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return <div className='logo'>
        <FontAwesomeIcon icon={faShoePrints} />
        <p>Sneakers Addict</p>
        </div>;
};
