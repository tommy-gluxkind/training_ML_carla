import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }else{
        //     return {
        //         textDecoration: 'none' 
        //     }
        // }
        // for same thing
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through':'none'
    }
}
    // First way to complete props
    // markComplete = (e) =>{
    //     console.log(this.props);
        
    // }
    // get style
    render() {    
    const { id, title } = this.props.todo;   
    return (<div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind
                // (this, this.props.todo.id)} /> {' '}
                (this, id)} /> {' '}

            {/* { this.props.todo.title} */}
            { title}
            <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
        </div>
        ) 
    }
}

// get style by giving a variable
const itemStyle = {
    backgroundColor: '#00f4f4'
}


// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;