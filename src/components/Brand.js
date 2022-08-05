import React from 'react'
import Brandarrow from '../assests/brand-arrow.svg'

const Brand = () => {
    let brands = ['Apple', 'Realme', 'Huawei', 'Samsung', 'Oppo', 'Vivo', 'Infinix', 'Oneplus', 'Itel',
        'Google', 'Redmi', 'Xiamoi', 'Honor', 'Nokia']

    return (
        <div className="my-2 position-relative">
            <p className='border-start border-danger ps-2' style={{ fontSize: "26px ", marginLeft: "3px", fontWeight: "bold" }}>By Brand</p>
            <div className='mt-2  ' >

                {brands.map(e =>
                    <div className='' style={{ display: "inline-flex" }}  >
                        <div className='brand'>
                            <p className="text-dark" style={{ fontSize: "22px", fontWeight: 700 }}>{e}</p>

                            <img src={Brandarrow} alt="" width={18} height={18} />
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Brand