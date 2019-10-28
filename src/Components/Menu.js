import React from 'react'
import '../Styles/Components/Menu-style.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="logo-container">

            </div>
            <nav className="nav-wrapper">
                <ul className="menu-links-group">
                    <li className="menu-link"><Link to="/">Home</Link></li>
                    <li className="menu-link"><Link to="/about">About Me</Link></li>
                    <li className="menu-link"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="menu-link"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="media-container">
                <a href="#">aaa</a>
                <a href="#">aaa</a>
                <a href="#">aaa</a>
            </div>
        </div>
    )
}
export default Menu
