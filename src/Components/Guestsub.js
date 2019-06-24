import React, { Component } from 'react'
import {Mycontext} from '../App';

export default class Guestsub extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center my-2 bg-info text-white">i am Guest Sub Class(Context API DEMO) </h1>
                <Mycontext.Consumer>
                    {({data,minus}) => (
                        <div className="card p-2">
                            <h3 className="card-text mx-auto display-3">{data.your}</h3>
                            <h4 className="text-danger mx-auto display-4">{data.number}</h4>
                            <button className="btn btn-info mx-auto" onClick={minus}>Minus - 1</button>
                        </div>
                    )}
                </Mycontext.Consumer>
            </div>
        )
    }
}
