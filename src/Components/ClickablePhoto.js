import React from 'react'

const ClickablePhoto = (props) => {
    return (
        <div onClick={props.onClick} className="image-card-small">
            <img  src={props.src} id={props.id}  alt="album-photo" />
        </div>
    )
}
export default ClickablePhoto