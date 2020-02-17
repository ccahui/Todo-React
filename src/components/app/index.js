import React, { Component } from 'react'
import {HeaderTodos} from './todos/header.js';
import {BodyTodos} from './todos/body.js';
import {FooterTodos} from './todos/footer.js';

export const FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
}

export class TodosApp extends Component {
    constructor(props) {
        super(props);
        /* All, active, completed */
        this.state = {
            todos: TODOS,
            filter: FILTERS.ALL
        };
    }

    changeFilter = (filter) =>{
        this.setState({
            filter
        });
    }

    clearCompleted = () => {
        const todos = this.state.todos;
        const newTodos = todos.filter((todo) => !todo.completed);
        this.setState({
            todos: newTodos
        });
    }

    generateIdUnique(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    createTodo = (description) =>{
        const todos = this.state.todos;
        const newTodos = todos.slice();
        
        const todo = {
          id: this.generateIdUnique(),
          description,
          completed: false,  
        };
        newTodos.push(todo);
        this.setState({
            todos: newTodos
        });
    }

    deleteTodo = (id) => {
        const todos = this.state.todos;
        const newTodos = todos.filter((todo) => todo.id !== id);
        this.setState({
            todos: newTodos
        });
    }
    editTodo = (id, description) => {
        const todos = this.state.todos;
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                todo.description = description;
            }
            return todo;
        });
        this.setState({
            todos: newTodos
        });
    }
    
    onChangeCompleted = (id) => {
        const todos = this.state.todos;
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos: newTodos
        });
    }

    onChangeCompletedAll = (completed) => {
        const todos = this.state.todos;
        const newTodos = todos.map((todo) => {
                todo.completed = completed
                return todo;
        });
        this.setState({
            todos: newTodos
        });
    }

    render() {
        const todos = this.state.todos;
        let size = 0;
        todos.forEach((todo) => {
            if(!todo.completed)
                size++;
        });
        return (
            <section className="todoapp">
                <HeaderTodos onCreate={this.createTodo}/>
                <BodyTodos todos={this.state.todos} filter={this.state.filter} onDelete = {this.deleteTodo} onCompleted = {this.onChangeCompleted} onCompletedAll={this.onChangeCompletedAll} onEdit={this.editTodo}/>
                <FooterTodos size = {size} filter={this.state.filter} onChangeFilter={this.changeFilter} clearCompleted = {this.clearCompleted}/>
            </section>
        );
    }
}

const TODOS = [
    { id: 1, description: 'Aprender React', completed: true },
    { id: 2, description: 'Aprender Angular', completed: false },
    { id: 3, description: 'Leer Clean Code', completed: true },
    { id: 4, description: 'Leer sobre Patrones de Diseño', completed: true },
    { id: 5, description: 'Principios SOLID', completed: false },
]
