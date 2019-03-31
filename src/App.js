import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';


class App extends Component {
  constructor(props){
    super(props)
      this.state = {count:1};
  }
  updateCounter = (e)=>{
    e.preventDefault()
    this.setState({count:this.state.count + 1 })
    console.log(e)
  }
  render() {
    // const count = this.state.count
    // const {count,name,password}=this.state
    const {count}=this.state
    return (
      <div className="App">
      <Counter 
        data = {count}
        updateCounter = {this.updateCounter}
      />

      </div>
    );
  }
}

export default App;
