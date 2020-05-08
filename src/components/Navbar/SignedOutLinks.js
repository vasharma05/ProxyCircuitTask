import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

export class SignedOutLinks extends Component {
    render() {
        return (
            <Fragment>
                <li><NavLink to='/signin'>Sign In</NavLink></li>
                <li><NavLink to='/signup'>Sign Up</NavLink> </li>
            </Fragment>
        )
    }
}

export default SignedOutLinks
