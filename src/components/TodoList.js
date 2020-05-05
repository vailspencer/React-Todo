import React from 'react';
import Todo from './Todo';

const TodoList = props => {
return (
    <div>
    <div className='toDoList'>
        {props.toDoItems.map(toDo => (
        <Todo key={toDo.id} toDo={toDo} toggleItems={props.toggleItems} />
        ))}
    </div>

    <button className='clear-btn' onClick={props.clearTodo}>
        Clear completed
    </button>
    </div>
);
};

export default TodoList;