import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
        />
        <div className="input-group-append">
          <button className="btn btn-danger" type="button">
           I did
          </button>
        </div>
      </div>
    );
  }
}
