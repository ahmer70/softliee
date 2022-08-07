import React from 'react'
import Slider from './../Slider';
import FindMobile from './../FindMobile';
import Brand from './../Brand';
import LatestMobile from './../LatestMobile';
import PopularMobiles from './../PopularMobiles';
import PopularComparision from './../PopularComparision';
import TechNews from './../TechNews';
import Adpalcement from '../../layout/Adpalcement';



const HomePage = () => {
    return (
        <div>

            <div className='mx-auto mt-2' style={{ maxWidth: "1360px", maxHeight: "790px" }}>
                <Slider />
                <div className='row my-4 ' >
                    <div className='col-lg-6 col-12 p-4' >
                        <FindMobile />
                    </div>
                    <div className='col-md-6  tablet-mode col-12 position-relative'  >
                        <div className='position-absolute' style={{ right: "-23px" }}>

                        </div>
                        <Brand />
                    </div>

                </div>
            </div>
            <Adpalcement />

            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>
                <LatestMobile />

            </div>
            <Adpalcement />
            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>

                <PopularMobiles />
                <PopularComparision />
            </div>
            <Adpalcement />
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