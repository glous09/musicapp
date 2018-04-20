import React, { Component } from 'react';

export default class playlist extends Component {
  render() {
    return (
      <div className="playlist">
        { this.props.children }
      </div>
    )
  }
}
