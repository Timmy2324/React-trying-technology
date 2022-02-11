import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType,
    onClick: (ratingValue: RatingValueType) => void
}

export const Rating = React.memo(RatingMemo);

function RatingMemo(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value >= 1} onClick={props.onClick} value={1}/>
            <Star selected={props.value >= 2} onClick={props.onClick} value={2}/>
            <Star selected={props.value >= 3} onClick={props.onClick} value={3}/>
            <Star selected={props.value >= 4} onClick={props.onClick} value={4}/>
            <Star selected={props.value >= 5} onClick={props.onClick} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    onClick: (ratingValue: RatingValueType) => void,
    value: RatingValueType,
}

function Star(props: StarPropsType) {

    return (<span onClick={() => props.onClick(props.value) }>{ props.selected ? <b>star </b> : 'star ' }</span>);
}