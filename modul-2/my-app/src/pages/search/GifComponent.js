import React, { Component } from 'react'

export default class GifComponent extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} alt={this.props.title} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}