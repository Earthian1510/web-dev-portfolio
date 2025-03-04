import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './styles/Sidebar.css'

const Sidebar = () => {
    return (
        <nav className='container'>
            <Link to='/'>
                <img src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="My Image" className='my-img' />
            </Link>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/artworks' className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'}>Artworks</NavLink>
                </li>
                <li>
                    <NavLink to='/music' className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/games' className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'}>Games</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar