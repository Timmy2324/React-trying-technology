import React, {useEffect, useState} from 'react';

type ClockPropsType = {

}

const get2digitsString = (number: number) => number > 10 ? number : '0' + number;

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalClock = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => clearInterval(intervalClock);
    }, [])

    const hours = get2digitsString(date.getHours())
    const minutes = get2digitsString(date.getMinutes())
    const seconds = get2digitsString(date.getSeconds())

    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    );
};