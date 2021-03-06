import React from "react";
import "./App.css";
import Todo from "./Todo";

let key = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.inputTodos = React.createRef();
  }

  handleAddToDo = (e) => {
    e.preventDefault();
    const { todos } = this.state;

    let inputElem = this.inputTodos.current;
    let objTodo = {
      id: key++,
      text: inputElem.value,
      isChecked: inputElem.isChecked,
    };

    this.setState({
      todos: [...todos, objTodo],
    });
    inputElem.value = "";
  };

  render() {
    const todosList = this.state.todos.map((todo, index) => (
      <Todo key={todo.id} obj={todo} index={index + 1} />
    ));

    return (
      <div>
        <h2>add new to do</h2>
        <form className="form" onSubmit={this.handleAddToDo}>
          <input type="text" placeholder="what to do" ref={this.inputTodos} />
          <button>add</button>
        </form>
        {todosList}
      </div>
    );
  }
}
