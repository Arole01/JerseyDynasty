import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"


export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-left">
                <ul>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/size-guide">Size Guide</Link></li>
                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            <div className="footer-middle">
                <p>Subscribe to our Newsletter</p>
                <form>
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>


            <div className="footer-right">
                <p>Follow US</p>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://wa.me/2348134979705" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}