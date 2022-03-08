import React from 'react';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';

const Todo = () => {
    const [todo, setTodo] = useState([])

    const recievedata = (ele) => {
        const item = {
            title : ele,
            id : nanoid()
        }
            setTodo([...todo,item])
    }

    const handleDelete = (id) => {
        const del = todo.filter((ele)=> {return ele.id !== id})
        setTodo(del)
    }
    return (
        <div>
            <GroceryInput data = {recievedata}/>
            {todo.map((e) => (
                    <GroceryList todos = {e} handleDelete = {handleDelete}/>
            ))}
        </div>
    );
};

export default Todo;