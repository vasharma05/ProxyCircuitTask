import React, { Component } from 'react'
import Todo from './Todo'

export class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            todos: [<Todo content='Hello' checked={true} />],
            newTodo:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            newTodo: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        let todoList = document.querySelector('#todo-list')
        let newTodo = <Todo content={this.state.newTodo} checked={false} />
        this.setState((prevState) => {
            prevState.todos.push(newTodo)
            return {
                todos: prevState.todos
            }
        })
    }
    render() {
        return (
            <div className='container'>
                <div id='todo-list' className='center'> 
                    {this.state.todos}
                </div>
                <form className='white' onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='newTodo'>Add a new Todo</label>
                        <input type='text' value={this.state.newTodo} onChange={this.handleChange} />
                    </div>
                    <button className='btn'>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoList
