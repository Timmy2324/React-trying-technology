import React, {useState} from "react";


export default {
    title: 'ReactMemo',
}


const Counter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersMemo = (props: {users: Array<string>}) => {
    return <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
}

const Users = React.memo(UsersMemo);

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(['Tim', 'Nastya', 'Gena', 'Cheburashka']);

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, 'kek'])}>+</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </div>
}