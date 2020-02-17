import React, { Component } from 'react'

export class FooterTodos extends Component {
    onFilter = (filter, e) =>{
        e.preventDefault();
        this.props.onChangeFilter(filter);
    }

    activeClass(filter) {
        const filterState = this.props.filter;
        return filter === filterState ? 'selected' : '';
    }

    render() {

        return (
                <footer className="footer">
                    <span className="todo-count"><strong>{this.props.size}</strong> item left</span>
                    <ul className="filters">
                        <li>
                            <a className={this.activeClass('all')} href="#/" onClick={(e) => this.onFilter('all', e)}>All</a>
                        </li>
                        <li>
                            <a className={this.activeClass('active')} href="#/active"  onClick={(e) => this.onFilter('active', e)}>Active</a>
                        </li>
                        <li>
                            <a  className={this.activeClass('completed')} href="#/completed"  onClick={(e) => this.onFilter('completed', e)}>Completed</a>
                        </li>
                    </ul>
                    
                    <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
                </footer>
        )
    }
}