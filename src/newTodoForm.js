import React, { Component } from 'react'


export default class NewTodoForm extends Component{
    constructor(p){
        super(p)
        this.state = {
            todos: ["a", "b", "c"],
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(this.state.task)
        e.target.reset()
        this.props.history.push("/todos")
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

 
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <label >Task</label>
                    <input type='text' name='task' id='task' onChange={this.handleChange}></input>
                    <button>add task</button>
                </form>

        )
    }
}