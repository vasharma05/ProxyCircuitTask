import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state={
            email:'',
            password: '', 
            isAuthenticated: this.props.auth.isAuthenticated,
            authError: this.props.auth.authError
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.login(this.state.email, this.state.password)        
        if(this.props.auth.authError === null){
            this.setState({
                isAuthenticated: true,
                authError: null
            })
        }else{
            this.setState({
                authError: this.props.auth.authError
            })
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            
            <div className='container'>
                <form className='white' onSubmit={this.handleSubmit}>
                    {this.state.isAuthenticated ? <Redirect to='/' />: null}
                    { this.state.authError ? <p className='red'>{this.state.authError}</p>: null}
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <button className='btn'>Sign In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        login: (email, password) => dispatch({type: 'LOGIN_USER', email, password})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
