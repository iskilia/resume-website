import React, { Component } from 'react'
import BusinessCard from './components/BusinessCard'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BusinessCard />
      </div>
    );
  }
}

export default App;
