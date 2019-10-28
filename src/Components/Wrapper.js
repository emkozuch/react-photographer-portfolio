import React from 'react'
import '../Styles//Components/Wrapper-style.scss'
import Menu from './Menu'

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <Menu />
            <div className="children-container">
                {props.children}
            </div>

        </div>
    )
}
export default Wrapper
