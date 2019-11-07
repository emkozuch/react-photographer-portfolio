import React from 'react'
import '../Styles/Components/ImageSlider-style.scss'
import Slide from './Slide'


class ImageSlider extends React.Component {
    state = {
        counter: this.props.clickedImage,
        mouseOver: false
    }

    handleMouseEnter = (e) => {
        this.setState({
            mouseOver: true
        })
    }
    handleMouseLeave = (e) => {
        this.setState({
            mouseOver: false
        })
    }


    render() {
        
        
        let slideStyle = ""
        if (this.state.mouseOver === true) {
            slideStyle = "fade-in"
        }
        return (
            <div className="image-slider-main-container">
                <Slide style={slideStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onTouchMove={this.props.onTouchMove} closeModal={this.props.closeModal} src={this.props.src} prevSlide={this.props.prevSlide} nextSlide={this.props.nextSlide} />
            </div>
        )
    }
}

export default ImageSlider