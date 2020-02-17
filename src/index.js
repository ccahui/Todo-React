import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'todomvc-app-css/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <TodosTableFilter />
                <Footer />
            </div>
        )
    }
}

class HeaderTodos extends Component {
    render() {
        return (
			    <header className="header">
				    <h1>todos</h1>
				    <input className="new-todo" placeholder="What needs to be done?" />
			    </header>
        )
    }
}

class BodyTodos extends Component {
    render() {
        return (
			    <section className="main">
				    <input id="toggle-all" className="toggle-all" type="checkbox"/>
				    <label htmlFor="toggle-all">Mark all as complete</label>
                    <Todos />
                </section>
        )
    }
}

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TODOS
        };
    }

    createTodoRow(todo){
        const props = {
            todo,
            key: todo.id
        };
        const component = React.createElement(Todo, props);
        
        return component;
    }
    render() {
        const todos = this.state.todos;

        const rowsTodos = [];
        todos.forEach((todo)=>{
            rowsTodos.push(this.createTodoRow(todo));
        });

        return (
            <ul className="todo-list">
              { rowsTodos }
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Buy a unicorn</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" value="Rule the web" />
                </li>
            </ul>
        )
    }
}
class Todo extends Component {
    render() {
        const todo = this.props.todo;
        return (
            <li className={todo.completed ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={todo.completed} />
                    <label>{todo.description}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" type="text" value={todo.description} />
             </li>
        )
    }
}

class FooterTodos extends Component {

    render() {
        return (
                <footer className="footer">
                    <span className="todo-count"><strong>0</strong> item left</span>
                    <ul className="filters">
                        <li>
                            <a className="selected" href="#/">All</a>
                        </li>
                        <li>
                            <a href="#/active">Active</a>
                        </li>
                        <li>
                            <a href="#/completed">Completed</a>
                        </li>
                    </ul>
                    <button className="clear-completed">Clear completed</button>
                </footer>
        )
    }
}

class TodosTableFilter extends Component {
    
    render() {
        return (
            <section className="todoapp">
                <HeaderTodos />
                <BodyTodos />
                <FooterTodos />
            </section>
        );
    }
}
 
 class Footer extends Component {
    render() {
        return (
        <footer className="info">
			<p>Double-click to edit a todo</p>
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<p>Created by <a href="https://github.com/ccahui">Cristian Ccahui</a></p>
			<p>Part of <a href="http://todomvc.com">React</a></p>
		</footer>
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

ReactDOM.render(<App />, document.getElementById('root'));


