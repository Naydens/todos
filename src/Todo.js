import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {

  render() {
    return (
      <div>
        <label >
          <span> {this.props.index + ". " + this.props.obj.text}</span>
          <input
            type="checkbox"
        
          />
        </label>
        
      </div>
    );
  }
}
