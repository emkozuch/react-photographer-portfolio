import React from 'react'
import '../Styles/Pages/AboutPage-style.scss'
import about1 from '../images/about/about1.png'
import about2 from '../images/about/about2.png'
import about3 from '../images/about/about3.png'

const aboutPhotos = [about1, about2, about3]
const windowWidth = window.innerWidth
console.log(windowWidth)
const AboutPage = () => {

    if (windowWidth < 576) {
        return (
            <div className="about content-container">
                <div className="about-content">
                    <img className="about-photo" src={aboutPhotos[0]} alt="about-1" />
                    <h2>Paragraph Title</h2>
                    <p>Mollit nisi incididunt officia qui irure id duis nisi veniam velit sit nulla. Ex esse quis veniam aliqua ex dolore amet. Cupidatat esse do dolore amet ad ipsum ut aliqua.Eiusmod laboris laboris pariatur nostrud. Cupidatat sunt eu labore officia dolore. Id enim esse proident laboris duis occaecat. Ea non ex laborum ad ipsum excepteur.Eiusmod ut aliqua nisi voluptate tempor id. Veniam sint tempor est magna cupidatat velit laboris enim exercitation irure ipsum veniam excepteur. Magna quis ad excepteur labore ad ut anim deserunt nulla deserunt.</p>
                    <img className="about-photo" src={aboutPhotos[1]} alt="about-1" />
                    <h2>Paragraph Title</h2>
                    <p>Mollit nisi incididunt officia qui irure id duis nisi veniam velit sit nulla. Ex esse quis veniam aliqua ex dolore amet. Cupidatat esse do dolore amet ad ipsum ut aliqua.Eiusmod laboris laboris pariatur nostrud. Cupidatat sunt eu labore officia dolore. Id enim esse proident laboris duis occaecat. Ea non ex laborum ad ipsum excepteur.Eiusmod ut aliqua nisi voluptate tempor id. Veniam sint tempor est magna cupidatat velit laboris enim exercitation irure ipsum veniam excepteur. Magna quis ad excepteur labore ad ut anim deserunt nulla deserunt.</p>
                    <img className="about-photo" src={aboutPhotos[2]} alt="about-1" />
                    <h2>Paragraph Title</h2>
                    <p>Mollit nisi incididunt officia qui irure id duis nisi veniam velit sit nulla. Ex esse quis veniam aliqua ex dolore amet. Cupidatat esse do dolore amet ad ipsum ut aliqua.Eiusmod laboris laboris pariatur nostrud. Cupidatat sunt eu labore officia dolore. Id enim esse proident laboris duis occaecat. Ea non ex laborum ad ipsum excepteur.Eiusmod ut aliqua nisi voluptate tempor id. Veniam sint tempor est magna cupidatat velit laboris enim exercitation irure ipsum veniam excepteur. Magna quis ad excepteur labore ad ut anim deserunt nulla deserunt.</p>
                    <h2>Paragraph Title</h2>
                </div>

            </div>
        )
    }
    return (

        <div className="about content-container">
            <div className="about-content">
                <h2>Paragraph Title</h2>
                <p>Mollit nisi incididunt officia qui irure id duis nisi veniam velit sit nulla. Ex esse quis veniam aliqua ex dolore amet. Cupidatat esse do dolore amet ad ipsum ut aliqua.Eiusmod laboris laboris pariatur nostrud. Cupidatat sunt eu labore officia dolore. Id enim esse proident laboris duis occaecat. Ea non ex laborum ad ipsum excepteur.Eiusmod ut aliqua nisi voluptate tempor id. Veniam sint tempor est magna cupidatat velit laboris enim exercitation irure ipsum veniam excepteur. Magna quis ad excepteur labore ad ut anim deserunt nulla deserunt.</p>
                <h2>Paragraph Title</h2>
                <p>Mollit nisi incididunt officia qui irure id duis nisi veniam velit sit nulla. Ex esse quis veniam aliqua ex dolore amet. Cupidatat esse do dolore amet ad ipsum ut aliqua.Eiusmod laboris laboris pariatur nostrud. Cupidatat sunt eu labore officia dolore. Id enim esse proident laboris duis occaecat. Ea non ex laborum ad ipsum excepteur.Eiusmod ut aliqua nisi voluptate tempor id. Veniam sint tempor est magna cupidatat velit laboris enim exercitation irure ipsum veniam excepteur. Magna quis ad excepteur labore ad ut anim deserunt nulla deserunt.</p>
                <h2>Paragraph Title</h2>
                <p>Mollit nisi incididunt officia qui irure id duis nisi veniam velit sit nulla. Ex esse quis veniam aliqua ex dolore amet. Cupidatat esse do dolore amet ad ipsum ut aliqua.Eiusmod laboris laboris pariatur nostrud. Cupidatat sunt eu labore officia dolore. Id enim esse proident laboris duis occaecat. Ea non ex laborum ad ipsum excepteur.Eiusmod ut aliqua nisi voluptate tempor id. Veniam sint tempor est magna cupidatat velit laboris enim exercitation irure ipsum veniam excepteur. Magna quis ad excepteur labore ad ut anim deserunt nulla deserunt.</p>
            </div>
            <div className="photos-container">

                {aboutPhotos.map((photo, index) => {
                    return <img key={`about-${index}`} src={photo} alt={`about-${index}`} />
                })}
            </div>
        </div>
    )
}
export default AboutPage