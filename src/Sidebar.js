import React, { Component } from 'react';
import logo from './logo.svg';

class Sidebar extends Component {
  render() {
    return (
      <div className="App-sidebar">
        <div className="App-sidebar-controls">
        </div>
        <div className="App-sidebar-content">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>Navigation Item 1</li>
            <li>Navigation Item 2</li>
            <li>Navigation Item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
