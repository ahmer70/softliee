import React from 'react'
import Navbar from './../Navbar';
import SubNav from './../SubNav';
import Slider from './../Slider';
import MobileRange from './../MobileRange';
import FindMobile from './../FindMobile';
import Brand from './../Brand';
import LatestMobile from './../LatestMobile';
import PopularMobiles from './../PopularMobiles';
import PopularComparision from './../PopularComparision';
import TechNews from './../TechNews';
import Footer from '../Footer';
import NewsLetter from './../NewsLetter';


const HomePage = () => {
    return (
        <div>

            <div className='mx-auto mt-2' style={{ width: "1360px", height: "790px" }}>
                <Slider />
                <div className='d-flex justify-content-between  my-4' >
                    <div className='' style={{ width: "800px", height: "484px" }}>
                        <FindMobile />
                    </div>
                    <div style={{ width: "560px", height: "484px" }}>
                        <Brand />
                    </div>

                </div>
            </div>
            <div className='row mx-0 mb-5 align-items-center' style={{ height: "140px", marginTop: "50px", backgroundColor: "#EDEEFD" }}>
                <div className='text-center mx-auto d-flex justify-content-center align-items-center' style={{ width: "1360px", height: "90px", backgroundColor: "white" }}>
                    <h4 className=' align-items-center' style={{ fontSize: "22px" }}>Ad Placement</h4>
                </div>
            </div>
            <div className='mx-auto mt-2' style={{ width: "1360px" }}>
                <LatestMobile />

            </div>
            <div className='row mx-0 my-5 align-items-center' style={{ height: "140px", backgroundColor: "#EDEEFD" }}>
                <div className='text-center mx-auto d-flex justify-content-center align-items-center' style={{ width: "1360px", height: "90px", backgroundColor: "white" }}>
                    <h4 className=' align-items-center' style={{ fontSize: "22px" }}>Ad Placement</h4>
                </div>
            </div>
            <div className='mx-auto mt-2' style={{ width: "1360px" }}>

                <PopularMobiles />
                <PopularComparision />
            </div>
            <div className='row mx-0 my-5 align-items-center' style={{ height: "140px", backgroundColor: "#EDEEFD" }}>
                <div className='text-center mx-auto d-flex justify-content-center align-items-center' style={{ width: "1360px", height: "90px", backgroundColor: "white" }}>
                    <h4 className=' align-items-center' style={{ fontSize: "22px" }}>Ad Placement</h4>
                </div>
            </div>
            <div className='mx-auto mt-2' style={{ width: "1360px" }}>

                <TechNews />

            </div>
            {/* <div className='' style={{ backgroundColor: "black" }}>
                <div className='mx-auto mt-2' style={{ width: "1360px" }}>
                    <NewsLetter />


                </div>
                <hr style={{ color: "white", opacity: 1 }} />

            </div> */}

        </div>
    )
}

export default HomePage