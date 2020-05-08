import React, { Component } from 'react'
import TodoList from './todo/TodoList'
import { connect } from 'react-redux'


class Dashboard extends Component {
    render() {
        return (
            this.props.user.isAuthenticated ?<TodoList user={this.props.user} /> : <h1 className='center'>Please Login</h1>
        )
    }
}
const mapStateToProps= (state) =>{
    return{
        user: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard)
