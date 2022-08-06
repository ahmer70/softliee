import React from 'react'
import Brandarrow from '../assests/Vector2.svg'
import WifiIcon from '../assests/wifi.svg'
import Mobile1 from '../assests/mobile1.svg'

const PopularComparision = () => {
    return (
        <div className="my-3">
            <div className='d-flex justify-content-between my-3 px-2'>
                <div>
                    <p className='right-border ps-2' style={{ fontSize: "26px ", fontWeight: "bold" }}>Popular Comparision</p>

                </div>
                <div>
                    <button type='button' className='d-flex  align-items-center justify-content-center rounded-pill border  px-3' style={{ height: "36px" }} >
                        <p style={{ fontSize: "18px", fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                    </button>
                </div>

            </div>

            <div className='pc row m-0 mt-5'>
                <div className=' col-4  ' style={{ width: "438.67px" }}>
                    <div className=' border p-4 latest_mobile' >
                        <div className='d-flex justify-content-between'>
                            <div className="">
                                <img src={Mobile1} alt="Mobile1" style={{ width: "160px", height: "120px" }} />
                                <p className='w22-700 text-center'>Oppo A53</p>
                            </div>
                            <div style={{ borderLeft: "2px dashed #262626 " }}></div>
                            <div className="">
                                <img src={Mobile1} alt="Mobile1" style={{ width: "185px", height: "120px" }} />
                                <p className='w22-700 text-center'>Infinix Hot 8</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center text-white mt-2 align-items-center mx-auto text-center' style={{ height: "55px", width: "318px", backgroundColor: "#4958EF" }}>
                            <button type='button' style={{ fontSize: "20px ", fontWeight: 600 }}>
                                <p className='  text-white text-center align-item-center' style={{ fontSize: "20px", fontWeight: 600 }} >Compare&nbsp;&nbsp;&nbsp;+</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' col-4 ' style={{ width: "438.67px" }}>
                    <div className=' border p-4 latest_mobile' >
                        <div className='d-flex justify-content-between'>
                            <div className="">
                                <img src={Mobile1} alt="Mobile1" style={{ width: "160px", height: "120px" }} />
                                <p className='w22-700 text-center'>Oppo A53</p>
                            </div>
                            <div style={{ borderLeft: "2px dashed #262626 " }}></div>
                            <div className="">
                                <img src={Mobile1} alt="Mobile1" style={{ width: "185px", height: "120px" }} />
                                <p className='w22-700 text-center'>Infinix Hot 8</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center text-white mt-2 align-items-center mx-auto text-center' style={{ height: "55px", width: "318px", backgroundColor: "#4958EF" }}>
                            <button type='button' style={{ fontSize: "20px ", fontWeight: 600 }}>
                                <p className='  text-white text-center align-item-center' style={{ fontSize: "20px", fontWeight: 600 }} >Compare&nbsp;&nbsp;&nbsp;+</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-4  ' style={{ width: "438.67px" }}>
                    <div className=' border p-4 latest_mobile' >
                        <div className='d-flex justify-content-between'>
                            <div className="">
                                <img src={Mobile1} alt="Mobile1" style={{ width: "160px", height: "120px" }} />
                                <p className='w22-700 text-center'>Oppo A53</p>
                            </div>
                            <div style={{ borderLeft: "2px dashed #262626 " }}></div>
                            <div className="">
                                <img src={Mobile1} alt="Mobile1" style={{ width: "185px", height: "120px" }} />
                                <p className='w22-700 text-center'>Infinix Hot 8</p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center text-white mt-2 align-items-center mx-auto text-center' style={{ height: "55px", width: "318px", backgroundColor: "#4958EF" }}>
                            <button type='button' style={{ fontSize: "20px ", fontWeight: 600 }}>
                                <p className='  text-white text-center align-item-center' style={{ fontSize: "20px", fontWeight: 600 }} >Compare&nbsp;&nbsp;&nbsp; +</p>
                            </button>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularComparision