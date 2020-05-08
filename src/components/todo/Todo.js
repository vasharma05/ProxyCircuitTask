import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            checked: e.target.checked,
        })
        console.log(this.props.id, !this.state.checked);
        
        this.props.completed(this.props.id, !this.state.checked)
    }
    render() {
        console.log(this.props.id)
        return (
            <p>
                <label>
                    <input type='checkbox' checked={this.state.checked} onChange={this.handleChange} />
                    <span style={{textDecoration: this.state.checked ? 'line-through': ''}}>{this.props.content}</span>
                </label>
            </p>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        completed: (id,completed) => dispatch({type:'COMPLETED', id,completed})
    }
}

export default connect(null,mapDispatchToProps)(Todo)
