import React from "react";
import "./App.css";
import Todo from "./Todo";

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

    let inputValue = this.inputTodos.current;
    let key = Math.floor(Math.random() * (-1000000 - 1000000) + 1000000);
    let objTodo = {
      id: key,
      todo: inputValue.value,
    };

    this.setState({
      todos: [...todos, objTodo],
    });
    inputValue.value = "";
  };

  render() {
    const todosList = this.state.todos.map((todo,index) => (
      <Todo key={todo.key} obj={todo} index={index+1} />
    ));

    return (
      <div>
        <h2>add new to do</h2>
        <form
          className="form"
          onSubmit={(event) => {
            this.handleAddToDo(event);
          }}
        >
          <input type="text" placeholder="what to do" ref={this.inputTodos} />
          <button>add</button>
        </form>
        {todosList}
      </div>
    );
  }
}
