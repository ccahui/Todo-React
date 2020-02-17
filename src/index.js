import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'todomvc-app-css/index.css';

import { TodosApp } from './components/app/index.js';
import { Footer } from './components/shared/footer.js';


class App extends Component {
    render() {
        return (
            <div>
                <TodosApp />
                <Footer />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


