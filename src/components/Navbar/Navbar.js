import React, { Component } from 'react'
import  SignedInLinks from './SignedInLinks'
import  SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
    render() {
        return (
            <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>ToDo App</Link>
                <ul className='right'>
                    <SignedInLinks />
                    <SignedOutLinks />
                </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar
