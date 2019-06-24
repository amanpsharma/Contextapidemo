import React, { Component } from 'react'
import Guest from './Guest';
export default class User extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center my-2 bg-info text-white">Context Api Demo</h2>
                <Guest />
            </div>
        )
    }
}
