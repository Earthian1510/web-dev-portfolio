import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1 style={{ marginBottom: '0.4rem'}}>Anjali Thorat</h1>
        <h2 style={{ fontWeight: '400', marginTop: '0px'}}>Full Stack Developer</h2>

        <ul style={{ display: 'flex', gap: '1rem'}}>
            <li>
                <Link>
                    <i className="bi bi-github" style={{ fontSize: '1.4rem', color: 'oklch(0.21 0.034 264.665)'}}></i>
                </Link>
            </li>
            <li>
                <Link>
                    <i className="bi bi-envelope-at" style={{ fontSize: '1.4rem', color: 'oklch(0.21 0.034 264.665)'}}></i>
                </Link>
            </li>
            <li>
                <Link>
                <i className="bi bi-linkedin" style={{ fontSize: '1.4rem', color: 'oklch(0.21 0.034 264.665)'}}></i>
                </Link>
            </li>
            <li>
                <Link>
                <i className="bi bi-download" style={{ fontSize: '1.4rem', color: 'oklch(0.21 0.034 264.665)'}}></i>
                </Link>
            </li>
        </ul>
        <div>
            <h3>Primary Interests: </h3>
            <ul style={{ listStyle: 'disc', marginLeft: '2rem'}}>
                <li>Solving real world problems of common people with programming</li>
                <li>Sustainability and Climate Change </li>
                <li>Zen Philosophy</li>
            </ul>
        </div>
        
    </div>
  )
}

export default About