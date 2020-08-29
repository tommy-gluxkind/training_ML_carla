import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
    // state = {
    //         todos:[
    //             {
    //                 id: uuidv4(),
    //                 title: 'take out the teash',
    //                 completed: true
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'dinner with wife',
    //                 completed: false
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: 'Meeting with boss',
    //                 completed: false
    //             }
    //         ]
    // }
    state = { 
        todos:[]
    }

    componentDidMount() {
        // can add ?_limit=10 to choose 10 limit
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState( { todos: res.data }))
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        }) });
        console.log(id);      
    }
    // delete todo
    // deleteTodo = (id) =>{
    //     this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})        
    // }
deleteTodo = (id) => {
    // use special sign
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})        
    })
}


    // Add todo
    addTodo = (title) =>{
        // add todo manually

        // const newTodo = {
        //     id: uuidv4(),
        //     title: title,
        //     completed: false
        // }

        // add todo by axios
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title, 
            completed: false
        })
            .then(res => this.setState( { todos:
            [ ...this.state.todos, res.data] }));
        this.setState({todos: [...this.state.todos]})
    }

    render() {       
        console.log(this.state.todos);
        // add exact to show the content in tag give only
        return ( 
            <Router>
        <div className = "App">
            <div className="container">
            <Header />
            <Route exact path="/" render={props =>(
                <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete = {this.markComplete} deleteTodo={this.deleteTodo}/>
                </React.Fragment>
            )} />
            <Route path="/about" component = {About}/>
            </div>
            </div>
            </Router>
        );
    }
}

export default App;