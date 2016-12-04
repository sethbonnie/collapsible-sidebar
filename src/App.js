import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>Navigation Item 1</li>
            <li>Navigation Item 2</li>
            <li>Navigation Item 3</li>
          </ul>
        </div>
        <div className="App-main">
          <h2>Main Content</h2>
          <p>Here we have the main content of the page</p>
        </div>
      </div>
    );
  }
}

export default App;
