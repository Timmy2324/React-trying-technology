import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect',
}

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(1);

    useEffect(() => {
        console.log('every render')
    })
    useEffect(() => {
        console.log('render first time')
    }, [])
    useEffect(() => {
        console.log('render every time when counter changed')
    }, [counter])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </div>
}