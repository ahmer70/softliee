import React from 'react'
import notiIcon from '../assests/mobile-bottom/noti.svg'
import finderIcon from '../assests/mobile-bottom/finder.svg'
import homeIcon from '../assests/mobile-bottom/home.svg'
import compareIcon from '../assests/mobile-bottom/compare.svg'

const MobileBottom = () => {
    return (
        <div className='mb-fixed'>
            <nav class=" fixed-bottom  " style={{ height: "59px", backgroundColor: "#FFFFFF", border: "1px solid #dee2e6" }}>
                <ul class="nav">

                    <li class="nav-item  mx-auto" >

                        <a class="nav-link pb-0 " href="#" style={{ color: "#4958EF", fontWeight: 600, borderBottom: "2px solid blue" }}>
                            <img src={homeIcon} className="mx-auto" alt="" />
                            <p style={{ fontSize: "12px" }}>Home</p>
                        </a>
                    </li>
                    <li class="nav-item  mx-auto">
                        <a class="nav-link text-secondary" href="#" style={{ fontWeight: 600 }}>
                            <img src={compareIcon} className="mx-auto" alt="" />
                            <p style={{ fontSize: "12px" }}>Compare</p>
                        </a>
                    </li>
                    <li class="nav-item  mx-auto">
                        <a class="nav-link text-secondary" href="#" style={{ fontWeight: 600 }}>
                            <img src={finderIcon} className="mx-auto" alt="" />
                            <p style={{ fontSize: "12px" }}>Finder</p>
                        </a>
                    </li>
                    <li class="nav-item  mx-auto">
                        <a class="nav-link text-secondary" href="#" style={{ fontWeight: 600 }}>
                            <img src={notiIcon} className="mx-auto " alt="" />
                            <p style={{ fontSize: "12px" }}>Notify</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileBottom