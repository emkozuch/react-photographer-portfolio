import React from 'react'
import '../Styles/Pages/AlbumPage-style.scss'
import { Link } from 'react-router-dom'
import { albums } from '../Components/albumData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ClickablePhoto from '../Components/ClickablePhoto'
import ImageSlider from '../Components/ImageSlider'
import Swipe from 'react-easy-swipe';

class AlbumPage extends React.Component {
    state = {
        currentPath: this.props.match.params.id,
        zoom: false,
        clickedImage: 0,
        photosArr: [],
        albumLength: 0,
        touchStart: 0,
        touchEnd: 0
    }

    openModal = index => {
        this.setState({
            zoom: true,
            clickedImage: index
        })
    }
    closeModal = () => {
        this.setState({
            zoom: false
        })
    }
    prevSlide = () => {
        if (this.state.clickedImage !== 0) {
            this.setState({
                clickedImage: this.state.clickedImage - 1
            })
        }

    }
    nextSlide = () => {
        if (this.state.clickedImage < this.state.albumLength - 1) {
            this.setState({
                clickedImage: this.state.clickedImage + 1
            })
        }
    }
    handleKeyDown = e => {
        if (e.key === 'ArrowLeft') {
            this.prevSlide()
        } else if (e.key === 'ArrowRight') {
            this.nextSlide()
        } else if (e.key === 'Escape') {
            this.closeModal()
        }
    }
    getPhotos = () => {
        let photosArr = []
        albums.map((album) => {
            if (album.route === this.state.currentPath) {
                album.data.map((photo) => {
                    photosArr.push([photo.id, photo.src])
                })
            }
        })
        this.setState({
            photosArr: photosArr,
            albumLength: photosArr.length
        })
    }
    componentDidMount() {
        this.getPhotos()
        window.addEventListener('keydown', this.handleKeyDown)
    }

    onSwipeMove = (position) => {
        this.setState({
            touchEnd: position.x
        })
    }
    onSwipeEnd = () => {
        if (this.state.touchEnd < -100) {
            this.nextSlide()
            this.setState({
                touchEnd: 0
            })
        } else if (this.state.touchEnd > 100) {
            this.prevSlide()
            this.setState({
                touchEnd: 0
            })
        }
    }
    render() {
        if (this.state.zoom === false) {
            return (
                <div className="album content-container">
                    <div className="back-btn-container">
                        <button>
                            <Link to="/portfolio">
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    size="2x" />
                            </Link>
                        </button>
                    </div>
                    <div className="album-photos-container">
                        {
                            this.state.photosArr.map((photo, index) => {
                                return (
                                    <ClickablePhoto
                                        onClick={() => { this.openModal(index) }}
                                        id={photo[0]}
                                        src={photo[1]} />
                                )
                            })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="album content-container">
                    <div className="back-btn-container">
                        <button>
                            <Link
                                to="/portfolio">
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    size="2x" />
                            </Link>
                        </button>
                    </div>
                    <div className="album-photos-container">
                        {
                            this.state.photosArr.map((photo, index) => {
                                return (
                                    <ClickablePhoto
                                    key={photo[0]}
                                        onClick={() => { this.openModal(index) }}
                                        id={photo[0]}
                                        src={photo[1]} />
                                )
                            })}
                    </div>
                    <Swipe
                        onSwipeMove={this.onSwipeMove}
                        onSwipeEnd={this.onSwipeEnd}>
                        <ImageSlider
                            src={this.state.photosArr[this.state.clickedImage][1]}
                            clickedImage={this.state.clickedImage}
                            prevSlide={this.prevSlide}
                            nextSlide={this.nextSlide}
                            closeModal={this.closeModal}
                            onTouchMove={this.handleTouchStart} />
                    </Swipe>
                </div>

            )
        }

    }


}
export default AlbumPage