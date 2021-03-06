import React from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import { deleteItem, completeItem, addNewItem, save, load } from "./redux/actions";
import { SHOW_ALL } from "./redux/constants"
import {
  AddItemComponent,
  ToDoListComponent,
  FilterComponent
} from "./components/index";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.load();

    this.state = {
      filter: SHOW_ALL
    };

    // Bindings
    this.onFilterChange = this.onFilterChange.bind(this);
    this.getherAllAvailable = this.getherAllAvailable.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!_.isEqual(this.props.all, nextProps.all)) {
      this.props.save(nextProps.all);
      // console.log('local store was updated');
    }

    return true;
  }

  onFilterChange(filter) {
    this.setState({ filter });
  }

  getherAllAvailable() {
    const filterMap = {
      SHOW_ALL: this.props.all,
      SHOW_ACTIVE: this.getActive(),
      SHOW_COMPLETED: this.getCompleted()
    };

    return filterMap[this.state.filter];
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
    // console.log('render');
    return (
      <>
        <h1>To Do App</h1>
        <AddItemComponent 
          handleAdd={(data) => this.props.addNewItem(data)}/>
        <FilterComponent
          handleFilter={this.onFilterChange}
          activeFilter={this.state.filter}/>
        <ToDoListComponent 
          data={this.getherAllAvailable()} 
          handleDelete={(id) => this.props.deleteItem(id)}
          handleComplete={(id) => this.props.completeItem(id)}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    all: [...state.allToDoItems]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id)),
    completeItem: id => dispatch(completeItem(id)),
    addNewItem: data => dispatch(addNewItem(data)),
    save: data => dispatch(save(data)),
    load: () => dispatch(load())
  };
};

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppComponent;
