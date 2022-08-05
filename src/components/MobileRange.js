import React from "react";
import "sanitize.css";
// import "./styles.scss";
import InputRange from "react-input-range";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

// docs:
// - https://material-ui.com/api/slider/#css
// - https://material-ui.com/styles/advanced/#makestyles-withstyles-styled
const useStyles = makeStyles(
    {
        track: {
            color: "#4958EF 35%",
            height: "3px",
            borderRadius: "3px"
        },
        rail: {
            opacity: 1,
            backgroundColor: "#80808094 ",
            height: "7px",
            borderRadius: "3px"
        },
        thumb: {
            color: "white",
            width: "43px",
            height: "43px",
            marginTop: "-18px",
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
    const [val, setVal] = React.useState({ min: 0, max: 100 });

    const [val2, setVal2] = React.useState([0, 100]);

    const classes = useStyles();

    return (
        <div className="App  " style={{ width: "98%", padding: "0 9px" }}>

            <div>
                <div>
                    <Slider
                        //disabled
                        classes={classes}
                        step={5}
                        min={0}
                        max={100}
                        value={val2}
                        onChange={(ev, v) => setVal2(v)}
                        onChangeCommitted={(ev, v) => console.log(v)}
                        valueLabelDisplay="off"
                        aria-labelledby="range-slider"
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "1rem 0",
                        fontWeight: 500,
                        color: "black"
                    }}
                >
                    <div>
                        <div className="mb-3 row">
                            <label for="inputrange1" className="col-sm-2 col-form-label">Rs</label>
                            <div className="col-sm-10">
                                <input type="text" value={val2[0]} className="form-control p-2" id="inputrange1" />
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: "24px", marginTop: "-25px", color: "rgb(73, 88, 239)", fontWeight: "bold" }}>To</p>
                    <div>
                        <div className="mb-3 row">
                            <label for="inputrange2" className="col-sm-2 col-form-label">Rs</label>
                            <div className="col-sm-10">
                                <input type="text" value={val2[1]} className="form-control p-2" id="inputrange2" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MobileRange