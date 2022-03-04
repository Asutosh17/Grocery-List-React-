import { useState } from "react";

function Counter(props){
    const [counter, setCounter] = useState(0);

    const incr = () => {
        setCounter(counter+1);
    }

    const decr = () => {
        setCounter(counter-1);
        if(counter === 0){
            setCounter(counter)
        }
    }

    const double = () => {
        setCounter(counter*2)
    }


    return (
        <>
        <div  className="counter">
        <h1>Counter : {counter}</h1>
        </div>
        <div className="btn">
        <button onClick={incr}>Increment</button>
        <button onClick={decr}>Decrement</button>
        <button onClick={double}>Double Value</button>
        </div>
        </>
    )
}

export default Counter