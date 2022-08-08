import React from "react";
import "sanitize.css";

import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

// docs:
// - https://material-ui.com/api/slider/#css
// - https://material-ui.com/styles/advanced/#makestyles-withstyles-styled

let width = window.screen.width;
console.log("width", width)
const useStyles = makeStyles(
    {
        track: {
            color: "#4958EF 35%",
            height: "3px",
            borderRadius: "3px"
        },
        rail: {
            opacity: 1,
            backgroundColor: "#808080a1 ",
            height: "10px",
            borderRadius: "3px"
        },
        thumb: {
            color: "white",
            width: `${width < 500 ? '35px' : '43px'}`,
            height: `${width < 500 ? '35px' : '43px'}`,
            margin: `${width < 500 ? '-14px' : '-18px'} 0px 0px ${width < 500 ? '-17px' : '0px'}`,
            backgroundColor: "#4958EF",
            border: "4px solid white",
            // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.09)",
            // "&$focusVisible,&:hover": {
            //     boxShadow: "0 0 0 8px rgba(155, 38, 182, 0.2)"
            // },
            // "&$active": {
            //     boxShadow: "0 0 0 14px rgba(155, 38, 182, 0.2)"
            // }
        },
        // don't remove the following lines
        focusVisible: {},
        active: {}
    },
    { name: "MuiSlider" }
);

const MobileRange = () => {

    const [val2, setVal2] = React.useState([1000, 35000]);

    const classes = useStyles();

    return (
        <div className="App  " >

            <div>
                <div className="mb-mragin mr" >
                    <Slider
                        //disabled
                        classes={classes}
                        step={5}
                        min={1000}
                        max={35000}
                        value={val2}
                        onChange={(ev, v) => setVal2(v)}
                        onChangeCommitted={(ev, v) => console.log(v)}
                        valueLabelDisplay="off"
                        aria-labelledby="range-slider"
                    />
                    <div className='d-flex justify-content-between'>
                        <label for="inputrange1" className="col-form-label label2 text-secondary " style={{ fontSize: "14px", fontWight: 500 }}>RS: 0</label>
                        <label for="inputrange1" className="col-form-label label2 text-end text-secondary" style={{ fontSize: "14px", fontWight: 500 }}>RS: 3.5 lac </label>

                    </div>
                </div>
                <div className='d-flex justify-content-between mx-0 mb-4 p-0'>
                    <div className=" row text-start p-0 m-0">
                        <div className="col-sm-2 p-0 ">
                            <label for="inputrange1" className="col-form-label label1">Rs </label>

                        </div>
                        <div className="col-sm-10 p-0">
                            <input type="text" value={val2[0]} className="form-control p-2 ps-4" id="inputrange1" />
                        </div>

                    </div>

                    <p className="px-3  d-flex align-items-center" style={{ fontSize: "24px", color: "rgb(73, 88, 239)", fontWeight: "bold" }}>To</p>


                    <div className=" row  p-0 m-0 ">
                        <div className="col-sm-2 p-0  ">
                            <label for="inputrange1" className="col-form-label label1">Rs </label>

                        </div>

                        <div className="col-sm-10 p-0 ">
                            <input type="text" value={val2[1]} className="form-control w-100 p-2 ps-4" id="inputrange1" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default MobileRange