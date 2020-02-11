import React from 'react'
import '../Styles//Components/Wrapper-style.scss'
import Menu from './Menu'
const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <div className="menu-container">
                <Menu />
            </div>
            <div className="children-container">
                {props.children}
            </div>
        </div>
    )
}
export default Wrapper
