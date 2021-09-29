import React from "react";
import Todo from "./Todo";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddToDo() {
    const input = document.querySelector(".add-to-do__input");
    console.log(input.value);
  }

  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="input your information "
          />
          <div className="input-group-append">
            <button className="btn btn-success" type="button">
            Add
            </button>
          </div>
        </div>
        <Todo />
      </div>
    );
  }
}
