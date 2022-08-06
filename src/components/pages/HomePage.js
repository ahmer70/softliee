import React from 'react'
import Slider from './../Slider';
import FindMobile from './../FindMobile';
import Brand from './../Brand';
import LatestMobile from './../LatestMobile';
import PopularMobiles from './../PopularMobiles';
import PopularComparision from './../PopularComparision';
import TechNews from './../TechNews';



const HomePage = () => {
    return (
        <div>

            <div className='mx-auto mt-2' style={{ maxWidth: "1360px", maxHeight: "790px" }}>
                <Slider />
                <div className='row my-4 ' >
                    <div className='col-md-6 col-12' >
                        <FindMobile />
                    </div>
                    <div className='col-md-6 ps-4 mobile-mode-on col-12 position-relative'  >
                        <div className='position-absolute' style={{ right: "-23px" }}>

                        </div>
                        <Brand />
                    </div>

                </div>
            </div>

            <div className='row mx-0 my-5 align-items-center' style={{ height: "140px", backgroundColor: "#EDEEFD" }}>
                <div className='text-center mx-auto d-flex justify-content-center align-items-center' style={{ maxWidth: "1360px", height: "90px", backgroundColor: "white" }}>
                    <h4 className=' align-items-center' style={{ fontSize: "22px" }}>Ad Placement</h4>
                </div>
            </div>
            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>
                <LatestMobile />

            </div>
            <div className='row mx-0 my-5 align-items-center' style={{ height: "140px", backgroundColor: "#EDEEFD" }}>
                <div className='text-center mx-auto d-flex justify-content-center align-items-center' style={{ maxWidth: "1360px", height: "90px", backgroundColor: "white" }}>
                    <h4 className=' align-items-center' style={{ fontSize: "22px" }}>Ad Placement</h4>
                </div>
            </div>
            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>

                <PopularMobiles />
                <PopularComparision />
            </div>
            <div className='row mx-0 my-5 align-items-center' style={{ height: "140px", backgroundColor: "#EDEEFD" }}>
                <div className='text-center mx-auto d-flex justify-content-center align-items-center' style={{ maxWidth: "1360px", height: "90px", backgroundColor: "white" }}>
                    <h4 className=' align-items-center' style={{ fontSize: "22px" }}>Ad Placement</h4>
                </div>
            </div>
            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>

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