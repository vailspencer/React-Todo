import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
constructor(props) {
    super(props);
    this.state = {
    taskName: ''
    };
}
changeHandler = e => {
    this.setState({ taskName: e.target.value });
};
submitForm = e => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
};
render() {
    return (
    <form onSubmit={this.submitForm}>
        <input
        type='text'
        name='taskName'
        value={this.state.taskName}
        onChange={this.changeHandler}
        />
        <button>Add</button>
    </form>
    );
}
}

export default TodoForm;