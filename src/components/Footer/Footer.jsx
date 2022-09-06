import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="!#">Company</a></li>
                            <li><a href="!#">Company</a></li>
                            <li><a href="!#">Company</a></li>
                            <li><a href="!#">Company</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li><a href="!#">Get help</a></li>
                            <li><a href="!#">Get help</a></li>
                            <li><a href="!#">Get help</a></li>
                            <li><a href="!#">Get help</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online Shop</h4>
                        <ul>
                            <li><a href="!#">Online Shop</a></li>
                            <li><a href="!#">Online Shop</a></li>
                            <li><a href="!#">Online Shop</a></li>
                            <li><a href="!#">Online Shop</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className='social-links'>
                            <a href="!#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="!#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="!#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="!#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
