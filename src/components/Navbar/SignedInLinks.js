import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export class SignedInLinks extends Component {
    render() {
        return (
            <Fragment>
                <li><NavLink to='/'>Heyy</NavLink></li>
                <li><NavLink to='/' >Log Out</NavLink> </li>
            </Fragment>
        )
    }
}


export default SignedInLinks
