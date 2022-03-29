import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';

type ClockPropsType = {
    mode: 'base' | 'analog'
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

    let clock;

    switch (props.mode) {
        case 'analog': {
            clock = <AnalogClock hours={hours} minutes={minutes} seconds={seconds}/>;
            break;
        }
        case 'base': {
            clock = <BaseClock hours={hours} minutes={minutes} seconds={seconds}/>
            break;
        }
    }

    return (
        <div>
            {clock}
        </div>
    );
};

type ClockViewPropsType = {
    hours: string | number,
    minutes: string | number,
    seconds: string | number,
}

const BaseClock = ({hours, minutes, seconds}: ClockViewPropsType) => {
    return <>
        <span>{hours}</span>
        :
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
    </>
}

const AnalogClock = ({hours, minutes, seconds}: ClockViewPropsType) => {
    const secondsStyle = {
        transform: `rotate(${+seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${+minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${+hours * 30}deg)`
    };
    return <>
        <div className={s.clock}>
            <div className={s.analog_clock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
        </div>
    </>
}