import React from 'react'
import AlbumCover from '../Components/AlbumCover'
import '../Styles/Pages/PortfolioPage-style.scss'
import { albums } from '../Components/albumData'

const PortfolioPage = () => {

    return (
        <div className="portfolio content-container">
            {albums.map((album,index) => {
                let source = album.data[0].src

                return <AlbumCover key={`album-${index}`} style={{backgroundImage: "url("+source+")"}} to={`/portfolio/${album.route}`} title={album.title} date={album.date} />
            })}
        </div>
    )
}
export default PortfolioPage