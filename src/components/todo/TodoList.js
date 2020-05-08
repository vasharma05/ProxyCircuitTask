import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

export class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: this.props.todos.map(todo => <Todo key={todo.id} id={todo.id} user={this.props.user.user} content={todo.text} checked={todo.completed} />),
            newTodo: ''
            //     id: this.props.todos.length,
            //     text: '',
            //     completed: false
            // }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            newTodo: e.target.value
        })
        // console.log(this.state.newTodo)

    }
    handleSubmit(e){
        e.preventDefault()
        let id = this.state.todos.length+1 
        // console.log(id)
        let newTodo = <Todo key={id} id={id} user={this.props.user.user} content={this.state.newTodo} checked={false} />
        this.setState((prevState) => {
            prevState.todos.push(newTodo)
            return {
                todos: prevState.todos
            }
        })
        let todo = {
            id,
            text: this.state.newTodo,
            completed: false
        }
        console.log(todo)
        // console.log(this.state.newTodo)
        this.props.addNewTodo(todo, this.props.user.user)
    }


    render() {
        console.log(this.props.todos)
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

const mapStateToProps = (state)=>{    
    if (state.auth.user.email in state.todo.todos){
        return {
            todos: state.todo.todos[state.auth.user.email]
        }
    }else{
        return{
            todos: []
        }
    }
    
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addNewTodo: (todo, user) => dispatch({type: 'ADD_TODO', todo, user}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
