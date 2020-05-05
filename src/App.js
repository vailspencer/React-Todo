import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const toDoItems = [
  {
    task: 'Make a To do App',
    id: 23413523452345,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: toDoItems
    };
  }

  //Selection Todo

  toggleItems = todoId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(toDo => {
        if (toDo.id === todoId) {
          return {
            ...toDo,
            completed: !toDo.completed
          };
        }
        return toDo;
      })
    });
  };
  //Add Todo

  addTask = taskName => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {
          task: taskName,
          completed: false,
          id: Date.now()
        }
      ]
    });
  };

  // Clear Todo
  clearTodo = () => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(toDo => {
        return !toDo.completed;
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Things That Need Doing</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          toDoItems={this.state.toDoItems}
          toggleItems={this.toggleItems}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;