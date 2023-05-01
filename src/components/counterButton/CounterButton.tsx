import react from 'react';

interface Props {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
export function CounterButton({ setCount }: Props) {
    const increment = () => {
        setCount((prevVal) => {
            return prevVal + 1;
        })
    };
    return (
        <button onClick={increment}>Increment</button>
    );
}
