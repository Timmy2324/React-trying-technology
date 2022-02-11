import React from "react";


type OnOfPropsType = {
    on: boolean,
    onChange: (on: boolean) => void,
}

export const OnOff = React.memo(OnOffMemo);

function OnOffMemo(props: OnOfPropsType) {

    const onOffStyle = {
        display: "flex",
        alignItems: "center",
    }

    const lightBulbStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.on ? "green" : "red",
    }

    const onStyle = {
        border: "1px solid black",
        padding: "10px 20px",
        backgroundColor: props.on ? "green" : "white",
    }

    const offStyle = {
        border: "1px solid black",
        padding: "10px 20px",
        backgroundColor: !props.on ? "red" : "white",
    }

    const onClicked = () => {
        props.onChange(true)
    };

    const offClicked = () => {
        props.onChange(false)
    };

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={onClicked}>
                On
            </div>
            <div style={offStyle} onClick={offClicked}>
                Off
            </div>
            <div style={lightBulbStyle}>

            </div>
        </div>
    );
}