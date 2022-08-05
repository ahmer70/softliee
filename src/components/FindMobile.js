import React from 'react'
import MobileRange from './MobileRange';

const FindMobile = () => {
    let ram = [1, 2, 3, 4, 6, 8, 12, 16]
    return (
        <div className="my-2 ">
            <p className='right-border mb-2 ps-2' style={{ fontSize: "26px ", fontWeight: "bold" }}>Lets Find A Mobile Phone</p>
            <div className="mx-auto position-relative" >
                <MobileRange />
                <button type='button' className='find-btn ' style={{ backgroundColor: "#4958EF", fontSize: "24px", fontWeight: "bold", height: "68px", color: "white" }}>Find Mobile</button>
                <div >
                    <p className='my-3'>Ram</p>
                    <div className='ram'>
                        {ram.map((e) => <div>
                            <p className=' rma-in ' >{e} GB</p>
                        </div>)

                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FindMobile