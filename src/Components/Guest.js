import React, { Component } from 'react'
import {Mycontext} from '../App';
import Guestsub from './Guestsub';
export default class Guest extends Component {
    render() {
        return (
            <div>
                <Mycontext.Consumer>
                    {({data,handle}) => (
                        <div className="card p-3">
                            <h3 className="card-text mx-auto display-2">{data.name}</h3>
                            <h4 className="text-danger mx-auto display-3">{data.age}</h4>
                            <button className="btn btn-info mx-auto" onClick={handle}>Click + 1</button>
                        </div>
                    )}
                </Mycontext.Consumer>
                <Guestsub />
            </div>
        )
    }
}
