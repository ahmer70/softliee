import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import ListIcon from '../assests/mobile-nav/list.svg'

import BransIcon from '../assests/mobile-nav/top-brands.svg'
import CompareIcon from '../assests/mobile-nav/compare.svg'
import tandingIcon from '../assests/mobile-nav/tanding.svg'
import Logo from '../assests/web-logo.png'
import TNewsIcon from '../assests/mobile-nav/teck-news.svg'
import upcomingIcon from '../assests/mobile-nav/upcoming.svg'
import LoginIcon from '../assests/ic_login.svg'
import SearchIcon from '../assests/mobile-nav/mobile-search.svg'
import MenuIcon from '../assests/mobile-nav/Menu.svg'
import PakIcon from '../assests/pak.svg'

import { Link } from 'react-router-dom'
import MobileSearch from './MobileSearch';
const MobileMenu = () => {
    const [MMenu, setMMenu] = useState(false), [OpenS, setOpenS] = useState(false);
    const [SM, setSM] = useState(3)

    let brands = ['Apple', 'Realme', 'Huawei', 'Samsung', 'Oppo', 'Vivo', 'Infinix', 'Oneplus', 'Itel',
        'Google', 'Redmi', 'Xiamoi', 'Honor', 'Nokia']

    return (
        <div>
            <div>
                <nav class="navbar " style={{ backgroundColor: "#4958EF" }}>
                    <div class="container-fluid" >
                        <button className=" " type="button" onClick={() => setMMenu(true)} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={ListIcon} alt="ListIcon" style={{ width: "32.6px", height: "14.4px" }} />
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="" className="d-inline-block align-text-top" style={{ width: "130px", height: "42px" }} />

                        </Link>
                        <div className='d-flex'>
                            <img src={SearchIcon} onClick={() => setOpenS(true)} style={{ cursor: "pointer" }} className="pe-3" alt="SearchIcon" />
                            <img src={LoginIcon} alt="SearchIcon" />
                        </div>

                    </div>
                </nav>
            </div>


            <Offcanvas show={MMenu} onHide={() => setMMenu(false)}>
                <Offcanvas.Header className='w-100' style={{ backgroundColor: "#F8F8F9" }} >
                    <Offcanvas.Title >
                        <img src={MenuIcon} alt="" className="d-inline-block align-text-top" style={{ width: "130px", height: "42px" }} />

                    </Offcanvas.Title>

                    <button type='button' className='p-2 bg-white' onClick={() => setMMenu(false)}  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg></button>

                </Offcanvas.Header>
                <Offcanvas.Body className='border-0'>

                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button  border-0 bg-transparent d-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <img src={BransIcon} className="me-3" alt="BransIcon" />  <p>Top Brands</p>

                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul class="list-group border-0">
                                        {brands.slice(0, SM).map((e) => <>
                                            <li class="list-group-item border-0">
                                                <Link to="/" >{e}</Link></li>
                                        </>
                                        )}
                                        {SM < brands.length && <li class="list-group-item border-0 " onClick={() => setSM(brands.length)} style={{ cursor: 'pointer' }}>
                                            More...
                                        </li>}
                                        {SM === brands.length && <li class="list-group-item border-0 " onClick={() => setSM(3)} style={{ cursor: 'pointer' }}>
                                            Less...
                                        </li>}
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                    <ul class="list-group">
                        <li class="list-group-item border-0 mb-2  d-flex">
                            <div style={{ width: "40px" }}>
                                <img src={tandingIcon} alt="tandingIcon" className='me-3' />
                            </div>

                            <Link to="/" >Trending Mobiles</Link></li>

                        <li class="list-group-item border-0 mb-2 d-flex">
                            <div style={{ width: "40px" }}>
                                <img src={upcomingIcon} alt="tandingIcon" className='me-3' />
                            </div>
                            <Link to="/" >Upcoming Mobiles</Link></li>
                        <li class="list-group-item border-0  mb-2 d-flex">
                            <div style={{ width: "40px" }}>
                                <img src={TNewsIcon} alt="tandingIcon" className='me-3' />
                            </div>
                            <Link to="/" >Tech News</Link></li>

                        <li class="list-group-item border-0 mb-2 d-flex">
                            <div style={{ width: "40px" }}>
                                <img src={CompareIcon} alt="tandingIcon" className='me-3' />
                            </div>
                            <Link to="/" >Compare Mobiles</Link></li>
                        <li class="list-group-item border-0 mb-2 ">

                            <Link to="/" >Privacy Policy</Link>
                        </li>
                        <li class="list-group-item border-0 mb-2 ">

                            <Link to="/" >Contact us</Link>
                        </li>
                        <li class="list-group-item border-0 mb-2 ">

                            <Link to="/" >Advertise with us</Link>
                        </li>
                        <li class="list-group-item border-0 mb-2 ">

                            <Link to="/" >About us</Link>
                        </li>



                    </ul>
                    <div class="accordion border-top accordion-flush" id="accordionFlushExample2">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button ps-2  border-0 bg-transparent d-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <img src={PakIcon} className="me-3" alt="BransIcon" />  <p>Pakistan</p>

                                </button>
                            </h2>
                            <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample2">
                                <div class="accordion-body">
                                    <ul class="list-group border-0">

                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                </Offcanvas.Body>
            </Offcanvas>

            <MobileSearch OpenS={OpenS} setOpenS={(e) => setOpenS(e)} />
        </div>
    )
}

export default MobileMenu