import React from 'react'
import Mobile3 from '../../../assests/mobile3.svg'
import './index.css'
import Brandarrow from '../../../assests/brand-arrow.svg'
import view_tube from '../../../assests/view_tube.svg'

const ProductPage = () => {
    let title = {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "33px",
        textTransform: "capitalize"
    }
    const verticalCenter = {
        margin: 0,
        position: "absolute",
        top: "50%",

        transform: "translateY(-50%)"
    }
    return (
        <div className='mx-auto mt-2 ' style={{ width: "1360px" }}>
            <div className="align-items-center position-relative" style={{ height: "158px" }}>
                <div style={verticalCenter}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                    <p style={title}>Oppo A3s Price in Pakistan</p>
                </div>
            </div>


            <div className='d-flex  align-items-center justify-content-center ' style={{ height: "70px", marginTop: "10px", backgroundColor: "#F8F8F9" }}>
                <p style={{ fontSize: "22px", fontWeight: 400 }}>Ad Placement</p>
            </div>

            <div className='border mt-5 d-flex ' style={{ height: "649px" }}>
                <div className='p-2 mt-4 ' style={{ width: "538px" }}>
                    <div id="carouselExampleIndicators " class="carousel slide " data-bs-ride="true">

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Mobile3} class="d-block " alt="..." style={{
                                    maxWidth: "244px",
                                    margin: "auto"
                                }} />
                            </div>
                            <div class="carousel-item">
                                <img src={Mobile3} class="d-block " alt="..." style={{
                                    maxWidth: "244px",
                                    margin: "auto"
                                }} />
                            </div>
                            <div class="carousel-item">
                                <img src={Mobile3} class="d-block " alt="..." style={{
                                    maxWidth: "244px",
                                    margin: "auto"
                                }} />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="visually-hidden">Next</span>
                        </button>

                        <div class="carousel-indicators" style={{ bottom: "-50px" }}>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    </div>
                    {/* <img src={Mobile3} alt="Mobile3" style={{ width: "44px", height: "44px" }} /> */}
                    <div className='text-center mt-5 '>
                        <p className='pp_overviewtitle'>Infinix Note 12 G96</p>
                        <p className='pp_price'>Rs. 36,999</p>
                        <p className='pp_ds'>Discontinued</p>

                    </div>
                    <div className='pp_main'>
                        <p className='pp_by'>9/88</p>
                        <p className='pp_by'>9/88</p>
                        <p className='pp_by'>9/88</p>
                    </div>
                    <div className='pp_bottom'>
                        <div className='pp_b_sub '>
                            <p className="text-dark" style={{ fontSize: "22px", fontWeight: 700 }}>Pictures</p>

                            <img src={Brandarrow} alt="" width={18} height={18} />
                        </div>
                        <div className='pp_b_sub '>
                            <p className="text-dark" style={{ fontSize: "22px", fontWeight: 700 }}>Compare</p>

                            <img src={Brandarrow} alt="" width={18} height={18} />
                        </div>
                        <div className='pp_b_sub '>
                            <p className="text-dark" style={{ fontSize: "22px", fontWeight: 700 }}>Opinions</p>

                            <img src={Brandarrow} alt="" width={18} height={18} />
                        </div>
                    </div>
                </div>
                <div></div>

                <div className='' style={{ width: "822px", borderLeft: "1px solid #d9dadd" }}>
                    <div className='pp_overview'>
                        <p>OverView</p>
                        <div>
                            <p className='text-white'>Watch Video </p>
                            <img src={view_tube} alt="view_tube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage