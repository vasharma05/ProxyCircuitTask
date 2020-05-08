import React, { Component, Fragment } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

export class SignedInLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect:false
        }
    }
    logout(){
        this.props.logout()
        this.setState({
            redirect:true
        })
    }
    render() {
        return (
            <Fragment>
            {this.state.redirect ? <Redirect to='/' />: null}
                <li><NavLink to='/'>{this.props.user.name}</NavLink></li>
                <li><p onClick={this.logout.bind(this)}>Log Out</p> </li>
            </Fragment>
        )
    }
}


export default SignedInLinks
