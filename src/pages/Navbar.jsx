import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/Navbar.css';
import '../styles/landingPage/LandingPage.css';

// Define the structure of the navbar links, distinguishing between internal scroll and external routes.
const navItems = [
    // Internal scroll targets
    { name: "Home", path: "/", sectionId: "home-section", isInternal: true },

    // External routes (handled by React Router)
    { name: "Projects", path: "/#projects-section", sectionId: "projects-section", isInternal: true }, 

    { name: "Certificates", path: "/#certificate-section", sectionId: "certificate-section", isInternal: true },

    { name: "Contact", path: "/contact-section", sectionId: null, isInternal: false }
    
    // Note: The 'About' section ID is missing from the original prompt's navItems, 
    // but I'll add a hypothetical route for it if you use it as a separate page.
    // { name: "About", path: "/about", sectionId: null, isInternal: false }, 
];

function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(null); 
    
    // --- Programmatic Smooth Scroll Function ---
    const scrollToSection = (e, sectionId) => {
        // We only want to handle the scroll if we are currently on the root path ('/')
        if (location.pathname === '/') {
            e.preventDefault(); 
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Calculate position considering the fixed navbar height
                const navbarHeight = document.querySelector('.navbar').offsetHeight; 
                // Scroll target is slightly above the section top to account for the fixed navbar
                const sectionTop = section.offsetTop - navbarHeight - 10; 
                
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        }
        // If not on the homepage, the <a> tag will naturally navigate to the path (e.g., /#certificate-section)
        // or the <Link> component will handle the route change (for external paths).
    };

    // --- 1. Scroll Handler for Navbar Background ---
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    // --- 2. Intersection Observer Logic for Active Section ---
    useEffect(() => {
        // Logic only runs when viewing the root path
        if (location.pathname !== '/') return;

        const observerOptions = {
            root: null,
            // Use negative top margin to make sections active only when they are high up in the viewport
            rootMargin: '0px 0px -50% 0px', 
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const matchedItem = navItems.find(item => item.sectionId === entry.target.id);
                    if (matchedItem) {
                        setActiveSection(matchedItem.name);
                    }
                }
            });
        }, observerOptions);
        
        // Observe all elements defined by sectionId
        navItems.forEach(item => {
            if (item.sectionId) {
                const element = document.getElementById(item.sectionId);
                if (element) {
                    observer.observe(element);
                }
            }
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, [location.pathname]);

    // --- 3. Combined useEffect for Scroll Listener ---
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // --- Logic to determine the final active class for a link ---
    const getLinkClass = (item) => {
        const isScrolled = scrolled ? 'links-scrolled' : '';
        
        let activeClass = '';

        // 1. Check for Active Route (for external links like /projects)
        // If the current path is /projects, this is true for the Projects item.
        if (location.pathname === item.path && item.path !== '/') {
             activeClass = 'active-nav-item';
        } 
        
        // 2. Check for Active Section (only runs on the homepage '/')
        else if (location.pathname === '/' && activeSection === item.name) {
            activeClass = 'active-nav-item';
        }
        
        // 3. Special handling for Home (CRITICAL FIX)
        // Home should only be active if the path is exactly '/'
        else if (item.name === 'Home') {
            if (location.pathname === '/') {
                // If on the home path, apply active class based on scroll/observer logic
                if (window.scrollY < 100 || activeSection === 'Home') {
                    activeClass = 'active-nav-item';
                }
            }
        }
        
        // If the activeClass was set in step 1 (e.g., /projects), it is retained.
        
        return `${isScrolled} ${activeClass}`.trim();
    };

    const navbarClasses = scrolled ? 'navbar scrolled-active' : 'navbar';

    return (
        <nav className={navbarClasses}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" className='navbar-logo'>AUSTN</Link> 
                </div>
                <ul className="navbar-links">
                    {navItems.map(item => (
                        <li key={item.name}>
                            {item.isInternal ? (
                                // Use <a> for programmatic scroll handling
                                <a 
                                    href={item.path} 
                                    onClick={(e) => scrollToSection(e, item.sectionId)}
                                    className={getLinkClass(item)}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                // Use Link for external route changes
                                <Link 
                                    to={item.path} 
                                    className={getLinkClass(item)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;