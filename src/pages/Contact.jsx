
import Navbar from './Navbar';
import '../styles/Contact.css'; 
import { useState } from 'react';

const Contact = () => {
    // State to manage form inputs (optional, but good practice for React forms)
    const [formData, setFormData] = useState({
        name: '', // Pre-filled data mimicking the image
        surname: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Implement actual submission logic (e.g., Axios post, email service call)
    };

    return (
      <>
      <Navbar/>
        <section className="contact-page-section" id='contact-section'>
            <div className="contact-content-container">
                
                {/* Left Column: Headline and Description */}
                <div className="contact-left-column">
                    <h2 className="contact-headline title">
                        GET IN<br/>TOUCH
                    </h2>
                    <p className="contact-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum volutpat justo, 
                        quis finibus odio commodo et. Mauris sit amet sapien a lacus aliquam dictum.
                    </p>
                </div>
                
                {/* Right Column: Form Area */}
                <div className="contact-right-column">
                    <form onSubmit={handleSubmit} className="contact-form">
                        
                        {/* Name */}
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                        />

                        {/* Surname */}
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input 
                            type="text" 
                            id="surname" 
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="form-input"
                        />
                        
                        {/* Email */}
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                        
                        {/* Message */}
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="What do you want to talk about?"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="form-textarea"
                        />
                        
                        {/* Submit Button */}
                        <button type="submit" className="form-submit-button">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </section>
      </>
    );
};

export default Contact;