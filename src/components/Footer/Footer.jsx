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
                        <h4>info</h4>
                        <ul>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>info</h4>
                        <ul>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>info</h4>
                        <ul>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                            <li><a href="!#">info</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>info</h4>
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
