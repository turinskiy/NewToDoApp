import * as React from "react";
import "./styles/main.css";
import "./styles/additem.css";

export class AddItemComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newItemText: "" };

    // Bindings
    this.onInput = this.onInput.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onInput(e) {
    this.setState({ newItemText: e.target.value });
  }

  onAddClick(e) {
    e.preventDefault();

    this.props.handleAdd(this.state.newItemText);

    this.setState({newItemText: ""});
  }

  render() {
    return (
      <div className="container">
        <div className="container text-container">
          <input
            type="text"
            value={this.state.newItemText}
            onChange={e => this.onInput(e)}/>
        </div>
        <div className="container button-container">
          <button
            disabled={!this.state.newItemText}
            onClick={e => this.onAddClick(e)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
