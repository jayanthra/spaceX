import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Timeline></Timeline>
      </div>
    );
  }
}

export default App;
