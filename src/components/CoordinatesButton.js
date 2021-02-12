// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coordinates: [0,0]
        }
    }
    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY
        this.setState({
            coordinates: [x, y]
        })
        this.props.onReceiveCoordinates(this.state.coordinates)
    }
    render(){
        return(
            <button className='coordinatesButton' onClick={this.handleClick}>
                {this.props.onReceiveCoordinates(this.state.coordinates)}
            </button>
        )
    }
}