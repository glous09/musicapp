import React, { Component } from 'react';

export default class navbar extends Component {
  render() {
    return (
      <div className="navbar">
        { this.props.children }
      </div>
    )
  }
}
