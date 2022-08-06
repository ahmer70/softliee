import React, { useState, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assests/web-logo.png'
import SearchIcon from '../assests/ic_home.svg'
import LoginIcon from '../assests/ic_login.svg'
import VectorIcon from '../assests/Vector.svg'
import PakIcon from '../assests/pak.svg'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#4958EF", height: "86px" }}>
                <div className="container-fluid" style={{ maxWidth: "1360px" }}>

                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className="d-inline-block align-text-top" style={{ width: "130px", height: "42px" }} />

                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-2">

                            <li className="nav-item">
                                <div className=" position-relative  " >
                                    <div>
                                        <input type="text" className="form-control rounded-pill " style={{ width: "718px", height: "46px" }} aria-label="Search Your Phone.." />

                                    </div>
                                    <div className='position-absolute right-0 ' style={{ top: "0px" }}>
                                        <span className="input-group-text   justify-content-center  text-center border-0" style={{ width: "168px", height: "46px", borderRadius: "0px 50px 50px 0px ", fontSize: "18px", fontWeight: 'bold' }}>
                                            <img src={SearchIcon} className="me-3" alt="SearchIcon " width={18} height={18} /> Search</span>
                                    </div>


                                </div>
                            </li>
                            <li className="nav-item   dropdown ms-3 me-4 d-flex justify-content-center rounded-pill bg-white align-items-center" style={{ width: "188px", height: "46px", fontSize: "18px" }}>
                                <img src={PakIcon} alt="PakIcon" width={24} height={18} />
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pakistan
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item ms-5 d-flex align-items-center">
                                <img src={VectorIcon} alt="LoginIcon" className='me-1' width={20} height={26} />

                            </li>
                            <li className="nav-item ms-5 d-flex align-items-center ">
                                <img src={LoginIcon} alt="LoginIcon" className='me-2' width={20} height={26} />
                                <Link className="nav-link text-white" to="/" style={{ fontSize: "20px", fontWeight: 'bold' }}>
                                    login
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>


            </nav>

        </>
    )
}

export default Navbar