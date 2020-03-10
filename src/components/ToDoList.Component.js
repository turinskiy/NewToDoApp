import * as React from "react";
import { ToDoItemComponent } from "./index";
import "./styles/main.css";
import "./styles/todolist.css";

export class ToDoListComponent extends React.Component {
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
              return <ToDoItemComponent 
                onDeleteClick={(id) => this.props.handleDelete(id)}
                onCompleteClick={(id) => this.props.handleComplete(id)}
                key={item.id} 
                item={item} 
                />;
            })
          : "Empty list"}
      </div>
    );
  }
}
