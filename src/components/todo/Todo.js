import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked,
            strikeThrough: this.props.checked
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            checked: e.target.checked,
            strikeThrough: e.target.checked 
        })
        
    }
    render() {
        return (
            <p>
                <label>
                    <input type='checkbox' checked={this.state.checked} onChange={this.handleChange} />
                    <span style={{textDecoration: this.state.strikeThrough ? 'line-through': ''}}>{this.props.content}</span>
                </label>
            </p>
        )
    }
}

export default Todo
