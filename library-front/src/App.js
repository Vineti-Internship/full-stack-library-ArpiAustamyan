import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  async componentDidMount(){
    const result=await fetch('http://localhost:3001');
    console.log(result.json());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
