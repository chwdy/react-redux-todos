import React, { Component } from 'react'
import Todo from "./Todo"
import { connect } from 'react-redux'
import { addtodo, removetodo } from './actionCreator'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'
import NewTodoForm from './newTodoForm'
class TodoList extends Component {
    constructor(props) {
        super(props)

        this.handleAdd = this.handleAdd.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }

    handleAdd(val) {
        this.props.addtodo(val)
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
                <Route 
                path='/todos/new'
                 component={(props) =>
                    <div>
                        <NewTodoForm {...props} handleSubmit={this.handleAdd}></NewTodoForm>
                    </div>
                    
                }></Route>
                <Route 
                exact path='/todos' 
                component={() =>
                    <div>
                        <h1>todo list!</h1>
                        <ul>{list}</ul>
                    </div>}></Route>
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


export default connect(mapStatestoProps, mapDispatchtoProps)(TodoList)