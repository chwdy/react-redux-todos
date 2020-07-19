import React, { Component } from 'react'
import Todo from "./Todo"
import { connect } from 'react-redux'
import { addtodo, removetodo } from './actionCreator'
import { bindActionCreators } from 'redux'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: ["a", "b", "c"],
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault()
        this.props.addtodo(this.state.task)
        e.target.reset()
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    removeTodo(id) {

        this.props.removetodo(id)
    }
    render() {
        
        let list = this.props.todos.map((t, i) => (
            <Todo removeTodo={this.removeTodo.bind(this, t.id)} task={t.task} key={i}></Todo>
        ))
        return (
            <div>
                <h1>todo list!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label >Task</label>
                    <input type='text' name='task' id='task' onChange={this.handleChange}></input>
                    <button>add task</button>
                </form>

                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

function mapStatestoProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({ addtodo, removetodo }, dispatch)
      }

}//equals to {addtodo,removetodo} in the same place


export default connect(mapStatestoProps,mapDispatchtoProps)(TodoList)