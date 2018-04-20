import React, { Component } from 'react';

export default class song extends Component {
  render() {
    return (
      <div className="song">
        { this.props.children }
      </div>
    )
  }
}
