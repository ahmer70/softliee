import React from 'react'
import Brandarrow from '../assests/Vector2.svg'
import WifiIcon from '../assests/wifi.svg'
import Mobile1 from '../assests/mobile1.svg'

const PopularMobiles = () => {
    let list = [
        {
            image: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            image: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }, {
            image: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            image: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }

    ]
    return (
        <div className="mt-3">
            <div className='d-flex justify-content-between my-3 px-2'>
                <div>
                    <p className='right-border  ps-2' style={{ fontSize: "26px ", fontWeight: "bold" }}>Popular Mobiles</p>

                </div>
                <div>
                    <button type='button' className='d-flex  align-items-center justify-content-center rounded-pill border  px-3' style={{ height: "36px" }} >
                        <p style={{ fontSize: "18px", fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                    </button>
                </div>

            </div>

            <div className='row m-0'>
                {list.map((e) => <>
                    <div className='col-3 p-2  '>
                        <div className='lItem  latest_mobile  mx-auto text-center' >

                            <img src={e.image} className="mx-auto" alt="image" width={200} height={200} />

                            <p className='LTitle'>{e.name}</p>
                            <div className='lCompare mx-auto'>
                                <p className='  text-white text-center align-item-center' style={{ fontSize: "20px", fontWeight: 600 }} >Compare +</p>
                            </div>


                            <div style={{ paddingTop: "6px" }}>
                                <p className='text-muted' style={{ fontSize: "18px", }}>{e.spec}</p>

                                <p className='d-flex justify-content-center' style={{ fontSize: "26px", fontWeight: "bold", color: "#262626" }}>Rs. {e.price} <img src={WifiIcon} className="ms-2" alt="WifiIcon" /></p>
                            </div>
                        </div>
                    </div>
                </>)}

            </div>
        </div>
    )
}

export default PopularMobiles