import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    const expanded = !this.state.expanded;
    this.setState({expanded});
  }

  render() {
    const {expanded} = this.state;
    return (
      <div className="App">
        <Sidebar toggleMenu={this.toggleMenu} expanded={expanded}>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li onClick={this.toggleMenu}>Navigation Item 1</li>
            <li onClick={this.toggleMenu}>Navigation Item 2</li>
            <li onClick={this.toggleMenu}>Navigation Item 3</li>
          </ul>
        </Sidebar>
        <Main />
      </div>
    );
  }
}

export default App;
