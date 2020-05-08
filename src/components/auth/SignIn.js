import React, { Component } from 'react'

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state={
            email:'',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
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

export default SignIn
