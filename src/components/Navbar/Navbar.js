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
                    { this.props.user.isAuthenticated ? <SignedInLinks /> :  <SignedOutLinks />}
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
  

export default connect(mapStateToProps)(Navbar)
