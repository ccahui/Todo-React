import React, { Component } from 'react';
import { Todo } from '../todo/todo.js';
import { FILTERS } from '../index.js';

export class BodyTodos extends Component {

    toggleAll = (e) => {
       const completed =  e.target.checked;
       this.props.onCompletedAll(completed);
    }

    render() {
        return (
			    <section className="main">
				    <input id="toggle-all" className="toggle-all" type="checkbox" onChange = {this.toggleAll}/>
				    <label htmlFor="toggle-all">Mark all as complete</label>
                    <Todos todos={this.props.todos} filter={this.props.filter} onDelete={this.props.onDelete} onCompleted = {this.props.onCompleted} onEdit={this.props.onEdit}/>
                </section>
        )
    }
}

class Todos extends Component {
    
    createTodoRow(todo){
        const props = {
            todo,
            key: todo.id,
            onDelete: this.props.onDelete,
            onCompleted: this.props.onCompleted,
            onEdit: this.props.onEdit,
        };
        const component = React.createElement(Todo, props);
        
        return component;
    }
    render() {
        const todos = this.props.todos;
        const filter = this.props.filter;
        const rowsTodos = [];

        todos.forEach((todo)=>{
            
            if(FILTERS.ACTIVE === filter && todo.completed){
                return;
            }
            if(FILTERS.COMPLETED === filter && !todo.completed ){
                return;
            }
            rowsTodos.push(this.createTodoRow(todo));
            
        });

        return (
            <ul className="todo-list">
              { rowsTodos }
            </ul>
        )
    }
}