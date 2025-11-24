
import { User, Camera, Mail, Code } from 'lucide-react'; // Updated imports
import '../styles/Footer.css';
import fb from '../media/icons/fb.png'
import ig from '../media/icons/ig.png'
import email from '../media/icons/email.png'
import gh from '../media/icons/github.png'


const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="content-container footer-grid">
                
                {/* Column 1: Logo & Description */}
                <div className="footer-col footer-branding">
                    <span className="footer-logo">Austn</span>
                    <p className="footer-description">Austin's Portfolio</p>
                </div>

                {/* Column 2: Portfolio Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Austin's Portfolio</h4>
                    <ul className="footer-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Skills */}
                <div className="footer-col">
                    <h4 className="footer-heading">Skills</h4>
                    <ul className="footer-links">
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>

                {/* Column 4: Connect - Now using generic professional icons */}
                <div className="footer-col footer-connect">
                    <h4 className="footer-heading">Connect</h4>
                    <div className="social-icons">
                        <a href="https://web.facebook.com/netsugoii" className="social-icon" alt="Facebook"><img src={fb} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/netsugoi/" className="social-icon" alt="Instagram"><img src={ig} alt="Instagram" /></a>
                        <a href="https://github.com/AustinFlores" className="social-icon" alt="GitHub"><img src={gh} alt="GitHub" /></a>
                    </div>
                </div>
            </div>
            
            {/* Copyright Row */}
            <div className="footer-copyright">
                <p>© 2025 Austin Flores. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;