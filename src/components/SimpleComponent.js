// Code SimpleComponent Here

import React, {Component} from 'react'

export default class SimpleComponent extends Component {
    state = {mood: "happy"}

    handleChange = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood: newMood})
    }
    
    render() {
        return <div onClick={this.handleChange}>{this.state.mood}</div>
    }
}
