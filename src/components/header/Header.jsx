import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import VistaLogo from '../../assets/images/VistaLogo.png'
import { useState } from 'react'

const Header = () => {
    const [responsive, setResponsive] = useState(false)
    const burgerShow = () => {
        setResponsive(!responsive)
    }

    const goContact = () => {
        window.open('https://www.jnzega.com', '_blank')
    }
    return (
        <>
            <nav>
                <div className="nav-menu">
                    <Link to="/">
                        <img src={VistaLogo} alt="Vista-Logo.png" className='logo-img' />
                    </Link>
                    <ul className='nav-link'>
                        <li>
                            <NavLink id='team' to='/#ourteam'>Team</NavLink>
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

                <div className={responsive ? "burger-menu open" : "burger-menu"} onClick={burgerShow}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className={responsive ? "responsive-show" : "responsive-hide"}>
                <ul className='nav-link'>
                    <li>
                        <Link id='team' to='/#ourteam'>Team</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/docs'>Docs</Link>
                    </li>
                    <li>
                        <a href="https://www.jnzega.com/" target='_blank'>Contact</a>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Header