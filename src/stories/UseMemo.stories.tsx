import React, {useMemo, useState} from "react";


export default {
    title: 'UseMemo',
}


export const Example1 = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(4);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let kek = 0;
            while (kek < 10000000) {
                kek++;
                let c = Math.random();
            }
            resultA *= i;
        }
        return resultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>result a: {resultA}</div>
        <div>result b: {resultB}</div>
    </div>
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersMemo = (props: { users: Array<string> }) => {
    return <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
}

const Users = React.memo(UsersMemo);

export const Example2 = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(['Tim', 'Nastya', 'Gena', 'Cheburashka']);

    const filterUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => {
        setUsers([...users, 'kak'])
    }

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>+</button>
        <Counter count={counter}/>
        <Users users={filterUsers}/>
    </div>
}