import '../../styles/landingPage/About.css';

import introVid from '../../media/introduction-video.mp4'

function About() {

  return (
    <>
      <div className="about">
        <div className="about-container" id="about-section">
          <h1 className='about-title title'>WHO AM I?</h1>

          <div className="about-content">
          <div className="video-container"><video src={introVid} controls />
          </div>
          <p className='about-subtext'>Outside of my projects, I’m currently pursuing my IT degree, where I continue sharpening my skills in software development, UI/UX, and system design. When I’m not working on school projects or client work, you’ll usually find me experimenting with new tools, playing games, or brainstorming concepts for my next build.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
