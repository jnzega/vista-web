import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import VistaLogo from '../../assets/images/VistaLogo.png'

const Header = () => {
    const goContact = () => {
        window.open('https://www.jnzega.com', '_blank')
    }
    return (
        <nav>
            <div className="nav-menu">
                <Link>
                    <img src={VistaLogo} alt="Vista-Logo.png" className='logo-img' />
                </Link>
                <ul>
                    <li>
                        <NavLink to='/#ourteam'>Team</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/docs'>Docs</NavLink>
                    </li>
                </ul>
            </div>
            <div className="contact-button" onClick={goContact}>
                <p>Contact</p>
            </div>
        </nav>
    )
}

export default Header