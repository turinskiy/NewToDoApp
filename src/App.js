import React from "react";
import { connect } from "react-redux";
import {
  AddItemComponent,
  ToDoListComponent,
  FilterComponent,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "./components";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL
    };

    // Bindings
    this.onFilterChange = this.onFilterChange.bind(this);
    this.getherAllAvailable = this.getherAllAvailable.bind(this);
  }

  onFilterChange(filter) {
    this.setState({ filter });
  }

  getherAllAvailable() {
    if (this.state.filter === SHOW_COMPLETED) {
      return this.getCompleted();
    } else if (this.state.filter === SHOW_ACTIVE) {
      return this.getActive();
    }

    return this.props.all;
  }

  getCompleted() {
    const res = this.props.all.filter(item => {
      return item.completed === true;
    });

    return res;
  }

  getActive() {
    const res = this.props.all.filter(item => {
      return item.completed === false;
    });

    return res;
  }

  render() {
    return (
      <>
        <h1>To Do App</h1>
        <AddItemComponent />
        <FilterComponent
          handleFilter={this.onFilterChange}
          activeFilter={this.state.filter}
        />
        <ToDoListComponent data={this.getherAllAvailable()} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    all: [...state.allToDoItems]
  };
};

const AppComponent = connect(
  mapStateToProps,
  null
)(App);
export default AppComponent;
