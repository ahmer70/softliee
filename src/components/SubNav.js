import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../assests/facebook.svg'
import YoutubeIcon from '../assests/youtube.svg'
import LinkedinIcon from '../assests/linkedin.svg'
import PinterestIcon from '../assests/pinterest.svg'

const SubNav = () => {

    let navstyle = {

        fontStyle: 'normal',
        fontSize: "20px", lineHeight: "27px", fontWeight: 700
    }
    return (
        <div className='bg-wight submenu  shadow-sm' style={{ height: "55px " }}>
            <div className='d-flex  px-3 justify-content-between align-items-center mx-auto pt-2 ' style={{ maxWidth: "1360px" }} >
                <Link to="/" style={navstyle}>Trending Mobiles</Link>

                <Link to="/" style={navstyle}>Tech News</Link>
                <Link to="/" style={navstyle}>Upcoming Mobiles</Link>
                <Link to="/" style={navstyle}>Popular Mobiles</Link>
                <Link to="/" style={navstyle}>Compare Mobiles</Link>
                <Link to="/" style={navstyle}>Phone Finder</Link>
                <Link to="/" >
                    <img src={FacebookIcon} alt="FacebookIcon" width={20} height={20} />
                </Link>
                <Link to="/" >
                    <img src={YoutubeIcon} alt="YoutubeIcon" width={20} height={20} />

                </Link>
                <Link to="/" >
                    <img src={LinkedinIcon} alt="LinkedinIcon" width={20} height={20} />

                </Link>
                <Link to="/" >
                    <img src={PinterestIcon} alt="PinterestIcon" width={20} height={20} />

                </Link>

            </div>
        </div>
    )
}

export default SubNav