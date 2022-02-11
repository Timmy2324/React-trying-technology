import React, {useState} from "react";

type UncontrolledRatingPropsType = {

}

export const UncontrolledRating = React.memo(UncontrolledRatingMemo);

function UncontrolledRatingMemo(props: UncontrolledRatingPropsType) {

    let [countStars, setCountStars] = useState(0);

    return (
        <div>
            <Star selected={countStars >= 1} setValue={() => setCountStars(1)}/>
            <Star selected={countStars >= 2} setValue={() => setCountStars(2)}/>
            <Star selected={countStars >= 3} setValue={() => setCountStars(3)}/>
            <Star selected={countStars >= 4} setValue={() => setCountStars(4)}/>
            <Star selected={countStars >= 5} setValue={() => setCountStars(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    setValue: () => void,
}

function Star(props: StarPropsType) {

    return (
        <span onClick={ () => props.setValue()}>
            {props.selected ? <b>star </b> : 'star '}
        </span>);
}