import React, {ChangeEvent} from 'react';
import {CounterButton} from "../../components/counterButton/CounterButton";

export function Home () {
    const [count, setCount] = React.useState(0);
    const [caption, setCaption]  = React.useState("");
    const [list, setList] = React.useState<String[]>([]);

    const handleAddToArray = () => {
        setList([...list, caption]);
        setCaption("");
    };

    const removeItem = (itemToRemove: String) => {
        const newList = list.filter((item: String) => item !== itemToRemove);
        setList(newList);
    }

    return (
        <div>
            <p>Form</p>
            <p>{count}</p>
            <CounterButton setCount={setCount}/>
            <br/>

            <input onChange={(ev) => {
                setCaption(ev.target.value);
            }} type="text"></input>
            <button onClick={handleAddToArray}>adds caption</button>

            <ul>
                {list.map((el: String, id: number) => {
                    return (
                        <li
                            key={id}
                            onClick={()=> removeItem(el)}
                        >
                            {el}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
