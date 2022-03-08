import React from 'react';
import {useState} from 'react';


function TodoInput({data}) {
    const [state, setState] = useState("")
    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text" onChange={(e) => {
                   setState(e.target.value)
            }}/>
            <button onClick={() =>{data(state)}}>ADD</button>
        </div>
    );
}

export default TodoInput;