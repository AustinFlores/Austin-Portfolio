import '../styles/CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="contact-section">
            <div className="content-container">
                <p className="contact-text">Ready to level up your project?</p>
                <p className="contact-subtext">I’d love to help bring your vision to life.</p>
                <Link to="/contact-section" className="contact-btn btn">Start A Conversation</Link>
            </div>
        </section>
    );
};

export default CTA;