import React from 'react'
import '../Styles/Components/Menu-style.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import photoLogo from '../images/photographer-logo.svg'
import SVG from 'react-inlinesvg'

const Menu = () => {
    return (
        <div className="container">
            <div className="logo-container">
                <SVG className="brand-logo" src={photoLogo}/>
            </div>
            <nav className="nav-wrapper">
                <ul className="menu-links-group">
                    <li className="menu-link"><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li>
                    <li className="menu-link"><NavLink exact activeClassName="activeLink" to="/about">About Me</NavLink></li>
                    <li className="menu-link"><NavLink exact activeClassName="activeLink" to="/portfolio">Portfolio</NavLink></li>
                    <li className="menu-link"><NavLink exact activeClassName="activeLink" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="media-container">
                <a href="#"><FontAwesomeIcon icon={faInstagram} className="font-awesome-icon" ></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} className="font-awesome-icon" ></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="font-awesome-icon" ></FontAwesomeIcon></a>
            </div>
        </div>
    )
}
export default Menu
