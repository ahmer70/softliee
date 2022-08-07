import React from 'react'
import Brandarrow from '../assests/Vector2.svg'
import WifiIcon from '../assests/wifi.svg'
import Mobile1 from '../assests/mobile1.svg'

const PopularMobiles = () => {
    let list = [
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }, {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }

    ]
    let width = window.screen.width
    return (
        <div className="mt-3">
            <div className='d-flex justify-content-between my-3 px-2'>
                <div>
                    <p className='right-border  ps-2 font26 font18' style={{ fontWeight: "bold" }}>Popular Mobiles</p>

                </div>
                <div>
                    <button type='button' className='d-flex  font18 font12 align-items-center justify-content-center rounded-pill border  px-3' style={{ height: "36px" }} >
                        <p style={{ fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                    </button>
                </div>

            </div>

            <div className='row m-0'>
                {list.slice(0, width < 500 ? 2 : list.length).map((e) => <>
                    <div className='col-lg-3  col-md-4 col-6 p-2  '>
                        <div className='lItem  latest_mobile ltimg mx-auto text-center' >

                            <img src={e.mimage} className="mx-auto" alt={e.mimage} />

                            <p className='LTitle font14'>{e.name}</p>
                            <div className='lCompare mx-auto'>
                                <p className='  text-white text-center align-item-center font20 font12' style={{ fontWeight: 600 }} >Compare +</p>
                            </div>


                            <div style={{ paddingTop: "6px" }}>
                                <p className='text-muted font18 font12' >{e.spec}</p>

                                <p className='d-flex justify-content-center font26 font12' style={{ fontWeight: "bold", color: "#262626" }}>Rs. {e.price} <img src={WifiIcon} className="ms-2" alt="WifiIcon" /></p>
                            </div>
                        </div>
                    </div>
                </>)}

            </div>
        </div>
    )
}

export default PopularMobiles