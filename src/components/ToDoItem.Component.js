import * as React from "react";
import { connect } from "react-redux";
import { deleteItem, completeItem } from "../redux/actions";
import "./styles/todoitem.css";

class ToDoItemClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onDeleteHandle(e, id) {
    e.preventDefault();

    this.props.deleteItem(id);
  }

  onCompleteHandle(e, id) {
    e.preventDefault();

    this.props.completeItem(id);
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
            onClick={e => this.onCompleteHandle(e, item.id)}
          >
            {item.completed ? "Done" : "Complete"}
          </button>
          <button
            className="decline"
            onClick={e => this.onDeleteHandle(e, item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: key => dispatch(deleteItem(key)),
    completeItem: id => dispatch(completeItem(id))
  };
};

export const ToDoItemComponent = connect(
  null,
  mapDispatchToProps
)(ToDoItemClass);
