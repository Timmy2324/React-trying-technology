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

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState<number>(1);
    const [counter2, setCounter2] = useState<number>(2);

    useEffect(() => {
        setTimeout(() => {
            console.log('lel')
        }, 1000)
    }, [counter])



    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        {counter2}
    </div>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState<number>(1);
    const [counter2, setCounter2] = useState<number>(2);
    const [date, setDate] = useState<string>();


    useEffect(() => {
        setInterval(() => {
            setDate(() => {
                let a = new Date();
                return a.toLocaleTimeString();
            })
        }, 1000);
    }, [])



    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        {counter2}
        <div>
            {date}
        </div>
    </div>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1);

    useEffect(() => {
        console.log('new counter' + counter)
        return () => {console.log('last counter' + counter)}
    }, [counter])

    const increase = () => {setCounter(counter + 1)}

    return <div>
        {counter} <button onClick={increase}>+</button>
    </div>
}