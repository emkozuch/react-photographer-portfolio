import React from 'react'
import '../Styles/Components/Album-style.scss'
import { Link } from 'react-router-dom'


const AlbumCover = (props) => {
    return (
        <div style={props.style} className="album-card">
            <Link className="album-link" to={props.to}>
                <div className="album-title-container">
                    <p>{props.title}</p>
                    <p>{props.date}</p>
                </div>
            </Link>
        </div >
    )
}


export default AlbumCover