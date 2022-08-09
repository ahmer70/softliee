import React, { useState, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assests/web-logo.png'
import SearchIcon from '../assests/ic_home.svg'
import LoginIcon from '../assests/ic_login.svg'
import VectorIcon from '../assests/Vector.svg'
import PakIcon from '../assests/pak.svg'
import IndiaIcon from '../assests/india.svg'
import USAIcon from '../assests/usa.svg'

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
    const [DD, setDD] = useState('Pakistan'), [query, setQuery] = useState('')

    let list = [
        {
            name: 'Mobile'
        },
        {
            name: 'Mobile4'
        },
        {
            name: 'Mobile5'
        }, {
            name: 'Mobile6'
        },
        {
            name: 'Mobile7 '
        }
    ]
    let finder = list.filter(post => {
        if (query === '') {
            return null;
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
            return post;
        }
    })

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#4958EF", height: "70px" }}>
                <div className="container-md" >

                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className="d-inline-block align-text-top" style={{ width: "130px", height: "42px" }} />

                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-2">

                            <li className="nav-item">
                                <div className=" position-relative  " >
                                    <div>
                                        <input type="text" className="form-control  ps-4" onChange={(e) => setQuery(e.target.value)} style={{ width: "518px", height: "40px", borderRadius: `50px 50px ${finder.length > 0 ? '0px 0px' : '50px 50px'} ` }} aria-label="Search Your Phone.." />

                                    </div>
                                    {finder.length > 0 && <div className='bg-body shadow ' style={{
                                        position: "absolute",
                                        width: "100%",
                                        marginTop: "-2px",
                                        borderRadius: "4px 0px 4px 4px",
                                        zIndex: 1
                                    }}>
                                        <div class="list-group">

                                            {finder.map((e) => <>
                                                <button type="button" class="list-group-item list-group-item-action border-0">{e.name}</button>
                                            </>)}

                                        </div>
                                    </div>}
                                    <div className='position-absolute right-0 ' style={{ top: "0px" }}>
                                        <span className="input-group-text   justify-content-center  text-center border-0" style={{ width: "150px", height: "39px", borderRadius: `0px 50px ${finder.length > 0 ? '0px' : '50px'}  0px`, fontSize: "16px", fontWeight: 'bold' }}>
                                            <img src={SearchIcon} className="me-3" alt="SearchIcon " width={15} height={15} /> Search</span>
                                    </div>


                                </div>
                            </li>
                            <li className="nav-item   dropdown ms-3 me-4 px-1 d-flex justify-content-between rounded-pill bg-white align-items-center" style={{ width: "188px", height: "40px", fontSize: "18px" }}>
                                <img src={DD === 'Pakistan' ? PakIcon : DD === 'India' ? IndiaIcon : DD === 'USA' ? USAIcon : ""} alt="PakIcon" width={24} height={18} />
                                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {DD}
                                </span>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item " onClick={() => setDD('Pakistan')} >
                                        <div className='d-flex '>
                                            <img src={PakIcon} alt="PakIcon" width={24} height={18} />
                                            <div className='text-end ms-3' style={{ fontSize: "18px" }}>
                                                Pakistan
                                            </div>
                                        </div>

                                    </li>
                                    <li className="dropdown-item" onClick={() => setDD('India')} >  <div className='d-flex '>
                                        <img src={IndiaIcon} alt="PakIcon" width={24} height={18} />
                                        <div className='text-start ms-3' style={{ fontSize: "18px" }}>
                                            India
                                        </div>
                                    </div></li>
                                    <li className="dropdown-item" onClick={() => setDD('USA')} >  <div className='d-flex '>
                                        <img src={USAIcon} alt="PakIcon" width={24} height={18} />
                                        <div className='text-start ms-3' style={{ fontSize: "18px" }}>
                                            USA
                                        </div>
                                    </div></li>
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