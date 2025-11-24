import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage.jsx'
import ProjectsSection from './pages/landingPage/ProjectsSection.jsx'
import Contact from "./pages/Contact.jsx";
import './App.css'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects-section" element={<ProjectsSection />} />
        <Route path="/contact-section" element={<Contact />} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App
