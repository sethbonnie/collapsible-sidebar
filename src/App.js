import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
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
        <Sidebar toggleMenu={this.toggleMenu}
          expanded={expanded} />
        <Main />
      </div>
    );
  }
}

export default App;
