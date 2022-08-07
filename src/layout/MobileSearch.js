import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

import LoginIcon from '../assests/ic_login.svg'
import ArrowIcon from '../assests/mobile-nav/arrowleft.svg'
import Brandarrow from '../assests/Vector2.svg'
import Mobile1 from '../assests/mobile1.svg'
const MobileSearch = ({ OpenS, setOpenS }) => {
    return (
        <div>
            <Offcanvas show={OpenS} onHide={() => setOpenS(false)} style={{ minWidth: "100%" }}>
                <Offcanvas.Header className='w-100 ' style={{ backgroundColor: "#4958EF" }} >
                    <Offcanvas.Title >
                        <img src={ArrowIcon} alt="" onClick={() => setOpenS(false)} className="d-inline-block align-text-top" style={{ width: "25px", height: "24px" }} />

                    </Offcanvas.Title>
                    <input type="text" className="msearch  rounded-pill " placeholder='Search Your Phone' />

                    <button type='button'   >
                        <img src={LoginIcon} alt="" onClick={() => setOpenS(false)} className="d-inline-block align-text-top" style={{ width: "24px", height: "24px" }} />

                    </button>

                </Offcanvas.Header>
                <Offcanvas.Body className='border-0'>
                    <div className='d-flex justify-content-between mb-4'>
                        <p style={{ fontWeight: 700 }}>Recent Search</p>

                        <button type='button' className='d-flex   align-items-center justify-content-center  '  >
                            <p style={{ fontSize: "12px", fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                        </button>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className='d-flex  align-items-center'>
                            <div><img src={Mobile1} alt="" style={{ width: "54px", height: "54px" }} /></div>
                            <div>
                                <p className='ps-2 m-0 ' style={{ fontSize: "15px", fontWeight: 700 }} >Infinix Note 12 G96</p>
                            </div>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className='d-flex  align-items-center'>
                            <div><img src={Mobile1} alt="" style={{ width: "54px", height: "54px" }} /></div>
                            <div>
                                <p className='ps-2 m-0 ' style={{ fontSize: "15px", fontWeight: 700 }} >Infinix Note 12 G96</p>
                            </div>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className='d-flex  align-items-center'>
                            <div><img src={Mobile1} alt="" style={{ width: "54px", height: "54px" }} /></div>
                            <div>
                                <p className='ps-2 m-0 ' style={{ fontSize: "15px", fontWeight: 700 }} >Infinix Note 12 G96</p>
                            </div>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MobileSearch