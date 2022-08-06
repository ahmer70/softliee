import React from 'react'

const NewsLetter = () => {
    return (
        <div className=' d-flex justify-content-center align-items-center' style={{ height: "306px" }}>
            <div className='mx-auto nlwidth' >
                <div className='mx-auto text-center'>
                    <p className="text-white " style={{ fontSize: "36px", fontWeight: "bold" }}>Subscribe To Newsletter</p>

                </div>
                <div className=" position-relative mx-auto  " style={{ marginTop: "70px" }}>
                    <div>
                        <input type="text" className="form-control rounded-pill ps-4 " placeholder='Enter your email Address' style={{ maxWidth: "718px", height: "60px" }} aria-label="Enter your email Address" />

                    </div>
                    <div className='position-absolute  ' style={{ top: "0px", right: "-17px" }}>
                        <span className="input-group-text  text-white  justify-content-center  text-center border-0" style={{ backgroundImage: "linear-gradient(to right, #498AEF , #EE2835)", maxWidth: "168px", height: "60px", borderRadius: "0px 50px 50px 0px ", fontSize: "20px", fontWeight: 600 }}>
                            Subscribe</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter