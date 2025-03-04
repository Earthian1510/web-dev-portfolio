import React from 'react'
import './styles/About.css'  

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-name">Anjali Thorat</h1>
      <h2 className="about-title">Full Stack Developer</h2>

      <ul className="social-links">
        <li>
          <a href="https://github.com/Earthian1510" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:your-email@example.com" className="icon-link">
            <i className="bi bi-envelope-at"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="/your-resume.pdf" download className="icon-link">
            <i className="bi bi-download"></i>
          </a>
        </li>
      </ul>

      <div>
        <h3>Primary Interests:</h3>
        <ul className="interests-list">
          <li>Solving real-world problems of common people with programming</li>
          <li>Sustainability and Climate Change</li>
          <li>Zen Philosophy</li>
        </ul>
      </div>
    </div>
  )
}

export default About
