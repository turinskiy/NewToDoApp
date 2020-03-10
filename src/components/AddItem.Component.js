import * as React from "react";
import { connect } from "react-redux";
import { addNewItem } from "../redux/actions";
import "./styles/main.css";
import "./styles/additem.css";

class AddItemClass extends React.Component {
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
    this.props.addToDoItem(this.state.newItemText);
    this.setState({
      newItemText: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="container text-container">
          <input
            type="text"
            value={this.state.newItemText}
            onChange={e => this.onInput(e)}
          />
        </div>
        <div className="container button-container">
          <button
            disabled={!this.state.newItemText}
            onClick={e => this.onAddClick(e)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDoItem: item => dispatch(addNewItem(item))
  };
};

export const AddItemComponent = connect(
  null,
  mapDispatchToProps
)(AddItemClass);
