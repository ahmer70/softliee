import React from 'react'
import Brandarrow from '../assests/Vector2.svg'

import Mobile1 from '../assests/mobile1.svg'
import comparearrow from '../assests/comparearrow.svg'
const PopularComparision = () => {

    let data = [
        {
            img1: Mobile1,
            title1: 'Oppo A53',
            img2: Mobile1,
            title2: 'Infinix Hot 8',
        },
        {
            img1: Mobile1,
            title1: 'Oppo A53',
            img2: Mobile1,
            title2: 'Infinix Hot 8',
        }, {
            img1: Mobile1,
            title1: 'Oppo A53',
            img2: Mobile1,
            title2: 'Infinix Hot 8',
        }
    ]
    return (
        <div className="my-3">
            <div className='d-flex justify-content-between my-3 px-2'>
                <div>
                    <p className='right-border ps-2 font26 font18' style={{ fontWeight: "bold" }}>Popular Comparision</p>

                </div>
                <div>
                    <button type='button' className='d-flex  see-more align-items-center justify-content-center rounded-pill border  px-3' >
                        <p style={{ fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                    </button>
                </div>

            </div>

            <div className=' row mx-0 margin5'>
                {data.map((e) => <>
                    <div className=' col-sm-4  ' >
                        <div className=' border pc-whole latest_mobile' >
                            <div className='d-flex justify-content-between'>
                                <div className="pc-arrange">
                                    <img src={e.img1} alt="Mobile1" />
                                    <p className='w22-700 text-center'>{e.title1}</p>
                                </div>
                                <div className='mobile-mode' style={{ borderLeft: "2px dashed #262626 " }}></div>
                                <div className="pc-arrange">
                                    <img src={e.img2} alt="Mobile1" />
                                    <p className='w22-700 text-center'>{e.title2}</p>
                                </div>
                                <div className='mobile-mode-on2 '>
                                    <span className='comparem'>
                                        <img src={comparearrow} alt="comparearrow" />
                                    </span>
                                </div>
                            </div>

                            <div className='d-flex mobile-mode2 justify-content-center text-white mt-2 align-items-center mx-auto text-center' style={{ height: "55px", maxWidth: "318px", backgroundColor: "#4958EF" }}>
                                <button type='button' style={{ fontSize: "20px ", fontWeight: 600 }}>
                                    <p className='  text-white text-center align-item-center' style={{ fontSize: "20px", fontWeight: 600 }} >Compare&nbsp;&nbsp;&nbsp;+</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default PopularComparision