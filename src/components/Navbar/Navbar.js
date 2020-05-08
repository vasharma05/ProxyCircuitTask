import React, { Component } from 'react'
import  SignedInLinks from './SignedInLinks'
import  SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


export class Navbar extends Component {
    render() {
        // console.log(this.props.user)
        return (
            <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>ToDo App</Link>
                <ul className='right'>
                    { this.props.user.isAuthenticated ? <SignedInLinks logout={this.props.logout} user={this.props.user.user}   /> :  <SignedOutLinks />}
                </ul>
            </div>
        </nav>
        )
    }
}
const mapStateToProps= (state) =>{
    return{
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        logout:()=> dispatch({type: 'LOGOUT_USER'})
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
