import React, { Component } from "react";

export class HeaderTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
  }

  onChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onCreate(this.state.textInput);
      this.setState({
        textInput: ""
      });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.textInput}
          onChange={this.onChange}
          onKeyDown={this.onKeyPress}
        />
      </header>
    );
  }
}
