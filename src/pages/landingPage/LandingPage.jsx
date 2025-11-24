import '../../styles/landingPage/LandingPage.css'
import Navbar from '../Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Certificates from './Certificates'
import ProjectsSection from './ProjectsSection'
import CTA from '../CTA'
import Footer from '../Footer'

import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
  const img = document.getElementById("hero-image");
  const next = document.getElementById("about-section");

  const onScroll = () => {
    const scrollY = window.scrollY;

    const imgHeight = img.offsetHeight;
    const imgInitialTop = img.offsetTop;  // <-- FIXED HERE

    const heroSection = document.querySelector(".hero-container");
    const heroTop = heroSection.offsetTop;  // get absolute position

    const imgAbsoluteTop = heroTop + imgInitialTop; // real starting Y

    const nextTop = next.offsetTop;
    const nextHeight = next.offsetHeight;

    // bottom of next section
    const nextBottom = nextTop + nextHeight;

    // FINAL FIX: correct max translate
    const maxTranslate = nextBottom - imgHeight - imgAbsoluteTop;

    const translateY = Math.min(scrollY, maxTranslate);

    img.style.transform = `translateY(${translateY}px)`;
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <div className='landing-page-container'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Certificates />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage