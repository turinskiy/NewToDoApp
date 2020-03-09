import * as React from "react";
import { ToDoItemComponent } from "./ToDoItem.Component";
import "./styles/main.css";
import "./styles/todolist.css";

class ToDoListComponent extends React.Component {
  // constructor(props) {
  //   super(props);

  //   //
  // }

  render() {
    const { data } = this.props;
    return (
      <div className="todo-list">
        {data.length
          ? data.map(item => {
              return <ToDoItemComponent key={item.id} item={item} />;
            })
          : "Empty list"}
      </div>
    );
  }
}

export default ToDoListComponent;
