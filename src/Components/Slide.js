import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Slide = (props) => {
    return (
        <div className="slide">
            <div
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                className="slide-content">
                <button
                    onClick={props.closeModal}
                    className={`close-modal-btn ${props.style}`}>
                    <FontAwesomeIcon
                        icon={faTimes}
                        size="2x" />
                </button>
                <img
                    onTouchMove={props.onTouchMove}
                    src={props.src}
                    alt={props.alt} />
                <div
                    className={`arrow-btns-container ${props.style}`}>
                    <button
                        onKeyDown={props.onKeyDown}
                        onClick={props.prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                    </button>
                    <button
                        onKeyDown={props.onKeyDown}
                        onClick={props.nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} size="2x" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slide