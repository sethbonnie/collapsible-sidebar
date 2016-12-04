import React, { Component } from 'react';
import classnames from 'classnames';

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
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sidebar;
