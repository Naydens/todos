import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleCrossOut = this.handleCrossOut.bind(this);
  }

  handleCrossOut(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <label htmlFor="inputCheck">
          <span> {this.props.index + ". " + this.props.obj.text}</span>
          <input
            type="checkbox"
            id="inputCheck"
            onChange={this.handleCrossOut}
          />
        </label>
      </div>
    );
  }
}
