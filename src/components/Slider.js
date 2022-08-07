import React from 'react'
import Slider3 from '../assests/slide-3.svg'
const Slider = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "14px" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slider3} className="d-block w-100" alt="Slider3" style={{ borderRadius: "16px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider3} className="d-block w-100" alt="Slider3" style={{ borderRadius: "16px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider3} className="d-block w-100" alt="Slider3" style={{ borderRadius: "16px" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider