import React from 'react';
import {CounterButton} from "../../components/counterButton/CounterButton";

export function Home () {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Form</p>
            <p>{count}</p>
            <CounterButton setCount={setCount}/>
        </div>
    );
}
