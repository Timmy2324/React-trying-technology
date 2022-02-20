import React, {useState} from "react";


export default {
    title: 'UseState',
}

function generateDate() {
    console.log('kek')
    return 2312314132;
}

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(generateDate);

    const onClickHandler = (state: number) => {
        return state + 1
    };

    return <div>
        <button onClick={() => setCounter(onClickHandler)}>+</button>
        {counter}
    </div>
}