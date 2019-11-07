import React from 'react'
import AlbumCover from '../Components/AlbumCover'
import '../Styles/Pages/PortfolioPage-style.scss'
import { albums } from '../Components/albumData'

const PortfolioPage = () => {

    return (
        <div className="portfolio content-container">
            {albums.map((album) => {
                let source = album.data[0].src
                console.log(source)
                return <AlbumCover style={{backgroundImage: "url("+source+")"}} to={`/portfolio/${album.id}`} title={album.title} date={album.date} />
            })}
        </div>
    )
}
export default PortfolioPage