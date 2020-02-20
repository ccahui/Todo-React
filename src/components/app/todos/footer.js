import React, { Component } from "react";
import { FILTERS } from "../index.js";

export class FooterTodos extends Component {
    
  onFilter = (filter, e) => {
    e.preventDefault();
    this.props.onChangeFilter(filter);
  };

  activeClass(filter) {
    const filterState = this.props.filter;
    return filter === filterState ? "selected" : "";
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.size}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={this.activeClass(FILTERS.ALL)}
              href="#/"
              onClick={e => this.onFilter(FILTERS.ALL, e)}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={this.activeClass(FILTERS.ACTIVE)}
              href="#/active"
              onClick={e => this.onFilter(FILTERS.ACTIVE, e)}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={this.activeClass(FILTERS.COMPLETED)}
              href="#/completed"
              onClick={e => this.onFilter(FILTERS.COMPLETED, e)}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
