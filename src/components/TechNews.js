import React from 'react'
import Brandarrow from '../assests/Vector2.svg'
import Mobile2 from '../assests/mobile2.svg'

const TechNews = () => {

    let list = [
        {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        },
        {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }, {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }
        ,
        {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }, {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }
        , {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }
    ]


    let width = window.screen.width
    return (
        <div className="my-3">
            <div className='d-flex justify-content-between my-3 px-2'>
                <div>
                    <p className='right-border ms-1 ps-2 font26 font18' style={{ fontWeight: "bold" }}>Tech News</p>

                </div>
                <div>
                    <button type='button' className='d-flex see-more align-items-center justify-content-center rounded-pill border  px-3'  >
                        <p style={{ fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                    </button>
                </div>

            </div>
            <div className="row my-3 mx-0">

                {list.slice(0, width < 500 ? 4 : list.length).map((e) => <div className="col-md-6 ">
                    <div className="card mb-3 p-3 card-border latest_mobile" >
                        <div className="row  align-items-center g-0">
                            <div className="col-4 ">
                                <img src={e.image} className="img-fluid mx-auto rounded-start tn_img" alt="..." />
                            </div>
                            <div className="col-8">
                                <div className="card-body ts-body">
                                    <h5 className="card-title font22 font14" style={{ fontWight: "bold" }}>{e.title}</h5>
                                    <p className="card-text"><small className="text-muted"><a href="/" className='text-danger text-decoration-underline  font20 font11b' >Read More</a></small></p>
                                    <p className="card-text text-muted font18t font8b" >{e.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default TechNews