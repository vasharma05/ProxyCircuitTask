import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            email:'',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        // console.log(this.state)
        this.props.signup(this.state)
        this.props.all_users()
        this.props.history.push('/')
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
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>password</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button className='btn'>Sign In</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signup: (user) => dispatch({type: 'REGISTER_USER',user}),
        all_users: () => dispatch({type: 'ALL_USERS'})
    }
}

export default connect(null,mapDispatchToProps)(SignUp)
