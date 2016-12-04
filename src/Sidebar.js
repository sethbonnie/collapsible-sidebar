import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';

class Sidebar extends Component {
  render() {
    const {expanded} = this.props;
    return (
      <div className={classnames("App-sidebar", {
        expanded: expanded,
        collapsed: !expanded
      })}>
        <div className="App-sidebar-controls">
          <i className="fa fa-bars fa-2x App-sidebar-menu-icon"
             onClick={this.props.toggleMenu}/>
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
