import '../../styles/landingPage/Hero.css'
import '../../styles/landingPage/LandingPage.css'

import AustinImg from '../../media/Austin-Formal.png'
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <>
      <div className="hero-container" id='home-section'>
        <div className="hero-content">
          <p className="hero-intro">Hi, I’m Austin Terrence Flores</p>
          <h1 className="web-developer">WEB DEVELOPER</h1>
          <h1 className="graphic-designer">GRAPHIC DESIGNER</h1>
          <p className="hero-subtitle">Driven by creativity. Powered by code. Focused on real impact.</p>
          <div className="hero-btn-container">
            <Link className="hero-btn btn" to="/projects-section">View my work</Link>
          </div>
        </div>

        <div className="hero-img-container">
          <img id="hero-image" src={AustinImg} alt="Austin Terrence Flores" />
        </div>
        
      </div>
    </>
  )
}

export default Hero
