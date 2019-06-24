import React, { Component } from 'react'
import User from './Components/User';
import { createContext } from 'istanbul-lib-report';
export const Mycontext = React.createContext();

export default class App extends Component {
  state={
    name:"Aman Sharma",
    age:23,
    number:100,
    your:"Sharma"
  }

  handlechange=()=>{
    this.setState({
      age:this.state.age + 1
    })
  }
  handleminus=()=>{
    this.setState({
      number:this.state.number - 1
    })
  }
  render() {
    const contextdata ={
      data:this.state,
      handle:this.handlechange,
      minus:this.handleminus
    }
    return (
      <Mycontext.Provider value={contextdata}>
        <User />
      </Mycontext.Provider>
    )
  }
}
