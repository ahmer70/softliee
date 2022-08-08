import React from 'react'
import Logo from '../assests/web-logo.png'
import AppLogo from '../assests/app.svg'
import FacebookIcon from '../assests/facebook-f.svg'
import YoutubeIcon from '../assests/youtube-f.svg'
import LinkedinIcon from '../assests/linkinden-f.svg'
import PinterestIcon from '../assests/pintrest-f.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className="" style={{ marginTop: "18px" }}>

                <footer className="pt-5 pb-1">
                    <div className="d-flex  ">
                        <div className=" mb-3 me-5 tablet-mode" style={{ width: "280px" }}>
                            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                                <img src={Logo} alt="Logo" />
                            </Link>
                            <p className="text-white">Softliee is an online mobile phone web where you can discover latest and updated mobile prices in Pakistan. Softliee team tries to share proper features and specifications along with mobile prices in Pakistan.</p>
                        </div>
                        <div className='footer-menu fb ' >
                            <div className=" mb-3 Softliee-f   " >
                                <h5 >Softliee</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Our Blog</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Contact Us</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Advertise with us</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Privacy Policy</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Terms & Conditions</Link></li>
                                </ul>
                            </div>

                            <div className=" mb-3 Top-Brands-f " >
                                <h5>Top Brands</h5>
                                <div className='row m-0'>
                                    <ul className="nav flex-column col">
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white ">Apple</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Samsung</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Huawei</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Oppo</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Realme</Link></li>
                                    </ul>
                                    <ul className="nav flex-column col">
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Apple</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Samsung</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Huawei</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Oppo</Link></li>
                                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-white">Realme</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className=" Sections-f tablet-mode ">
                                <h5>Sections</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Trending Mobiles</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Upcoming Mobiles</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Compare Mobile</Link></li>
                                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 ">Find Phone</Link></li>
                                </ul>
                            </div>
                            <div className=" app-f ">
                                <h5>Download Us</h5>
                                <img src={AppLogo} alt="AppLogo" style={{ width: "194px", height: "57px" }} />
                            </div>

                        </div>

                    </div>

                    <div className="d-flex flex-column footer-bottom flex-sm-row justify-content-between py-4 ftmargin border-top">
                        <p className='text-white'>&copy; Softliee Pakistan © 2022 All Rights Reserved  <Link to="/" className='text-danger'>Softliee.com</Link></p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><Link className="link-dark" to="/">
                                <img src={FacebookIcon} alt="FacebookIcon" style={{ width: "20px", height: "20px" }} />
                            </Link></li>
                            <li className="ms-3"><Link className="link-dark" to="/">
                                <img src={YoutubeIcon} alt="YoutubeIcon" style={{ width: "20px", height: "20px" }} />

                            </Link></li>
                            <li className="ms-3"><Link className="link-dark" to="/">
                                <img src={LinkedinIcon} alt="LinkedinIcon" style={{ width: "20px", height: "20px" }} />

                            </Link></li>
                            <li className="ms-3"><Link className="link-dark" to="/">
                                <img src={PinterestIcon} alt="PinterestIcon" style={{ width: "20px", height: "20px" }} />

                            </Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer