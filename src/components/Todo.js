import React from 'react';

const Todo = props => {
return (
    <div
        className={`item${props.toDo.completed ? ' completed ' : ''}`}
        onClick={e => props.toggleItems(props.toDo.id)}>
    <p>{props.toDo.task}</p>
    </div>
    );
}; 

export default Todo;