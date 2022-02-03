import React, {useState} from "react";


type OnOfPropsType = {}

export function UncontrolledOnOff(props: OnOfPropsType) {

    let [on, setOn] = useState(false);

    const onOffStyle = {
        display: "flex",
        alignItems: "center",
    }

    const lightBulbStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? "green" : "red",
    }

    const onStyle = {
        border: "1px solid black",
        padding: "10px 20px",
        backgroundColor: on ? "green" : "white",
    }

    const offStyle = {
        border: "1px solid black",
        padding: "10px 20px",
        backgroundColor: !on ? "red" : "white",
    }

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>
                On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>
                Off
            </div>
            <div style={lightBulbStyle}>

            </div>
        </div>
    );
}