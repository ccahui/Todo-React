import React, { Component } from "react";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: this.props.todo.description,
      isEditing: false
    };
    this.textInput = React.createRef();
  }

  onChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };

  focusInput = () => {
    this.textInput.current.focus();
  };

  edit = () => {
    this.setState({ isEditing: true }, this.focusInput);
  };

  save = () => {
    this.setState({
      isEditing: false
    });
    this.props.onEdit(this.props.todo.id, this.state.textInput);
  };

  classNames(classes) {
    return Object.entries(classes)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
      .join(" ");
  }

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.save();
    }
  };

  render() {
    const todo = this.props.todo;
    const liClass = this.classNames({
      completed: todo.completed,
      editing: this.state.isEditing
    });

    return (
      <li className={liClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={id => this.props.onCompleted(todo.id)}
          />
          <label onDoubleClick={this.edit}>{todo.description}</label>
          <button
            className="destroy"
            onClick={id => this.props.onDelete(todo.id)}
          ></button>
        </div>
        <input
          ref={this.textInput}
          className="edit"
          type="text"
          value={this.state.textInput}
          onChange={this.onChange}
          onBlur={this.save}
          onKeyPress={this.onKeyPress}
        />
      </li>
    );
  }
}
