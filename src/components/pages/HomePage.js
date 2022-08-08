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
    
    let width = window.screen.width


    return (
        <div>

            <div className='mx-auto mt-2' style={{ maxWidth: "1360px", maxHeight: "790px" }}>
                <Slider />
                <div className='row mb-mragin   ' >
                    <div className='col-lg-6 col-12 mb-padding' >
                        <FindMobile />
                    </div>
                    <div className='col-md-6  tablet-mode col-12 position-relative'  >
                        <div className='position-absolute' style={{ right: "-23px" }}>

                        </div>
                        <Brand />
                    </div>

                </div>
            </div>
            

            {width>500&&<Adpalcement />}
            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>
                <LatestMobile />

            </div>
            <Adpalcement />
            <div className='mx-auto mt-2' style={{ maxWidth: "1360px" }}>

                <PopularMobiles />
                <PopularComparision />
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