import React, { useState } from 'react'
import '../Styles/Pages/HomePage-style.scss'
import photo1 from '../images/home/duotone.png'
import photo2 from '../images/home/duotone4.png'
import photo3 from '../images/home/duotone (2).png'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const Home = () => {

    return (
        <div className="home content-container">
            <div className="photos-container">
                <img className="home-page-photo one" src={photo1} alt="homepage-photo" />
                <img className="home-page-photo" src={photo2} alt="homepage-photo" />
                <img className="home-page-photo" src={photo3} alt="homepage-photo" />
            </div>
            <div className="quote-container">
                <div className="quote">
                    <p  ><span className="colored">“</span>We are making photographs to understand what our lives mean to us.<span className="colored">“</span></p>
                    <span  ><span className="colored">—</span>Ralph Hattersley</span>
                </div>
            </div>
        </div>
    )
}
export default Home