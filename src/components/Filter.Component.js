import * as React from "react";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "./index";
import "./styles/main.css";
import "./styles/filter.css";

export default class FilterComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleClick(e, filter) {
    e.preventDefault();

    this.props.handleFilter(filter);
  }
  render() {
    const { activeFilter: active } = this.props;
    return (
      <div className="container align-right" style={{}}>
        <div className="bordered-box filter-block">
          <span
            className={[
              "active-elem",
              active === SHOW_ALL ? "selected" : ""
            ].join(" ")}
            onClick={e => this.handleClick(e, SHOW_ALL)}
          >
            Show All
          </span>
          /
          <span
            className={[
              "active-elem",
              active === SHOW_ACTIVE ? "selected" : ""
            ].join(" ")}
            onClick={e => this.handleClick(e, SHOW_ACTIVE)}
          >
            Active
          </span>
          /
          <span
            className={[
              "active-elem",
              active === SHOW_COMPLETED ? "selected" : ""
            ].join(" ")}
            onClick={e => this.handleClick(e, SHOW_COMPLETED)}
          >
            Completed
          </span>
        </div>
      </div>
    );
  }
}
