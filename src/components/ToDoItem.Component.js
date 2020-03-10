import * as React from "react";
import "./styles/todoitem.css";

export class ToDoItemComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onDeleteHandle(e, id) {
    e.preventDefault();

    this.props.onDeleteClick(id);
  }

  onCompleteHandle(e, id) {
    e.preventDefault();

    this.props.onCompleteClick(id);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="todo-item">
        {/* TODO Text */}
        <div className="item-text">{item.text}</div>
        {/* Action Buttons */}
        <div className="item-actions">
          <button
            className={["accept", item.completed ? "done" : ""].join(" ")}
            onClick={e => this.onCompleteHandle(e, item.id)}>
            {item.completed ? "Done" : "Complete"}
          </button>
          <button
            className="decline"
            onClick={e => this.onDeleteHandle(e, item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}