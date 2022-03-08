import React from 'react';

const TodoList = ({todos, handleDelete}) => {
    return (
        <div className = "badadiv">
            <span className="todolist">{todos.title}</span>   
            <button className="btn" onClick={() => {handleDelete(todos.id)}}>Remove</button>
        </div>
    );
};

export default TodoList;