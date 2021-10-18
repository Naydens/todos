import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoContainer">
        <p className="todoContainer__p">{this.props.index  + this.props.obj.todo}</p>
        <input type="checkbox" />
      </div>
    );
  }
}
