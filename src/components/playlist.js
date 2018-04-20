import React, { Component } from 'react';

export default class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <form>
          <button type="button" className="btn btn-dark">+ Add List.</button>
          <div className="form-group">
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
            </div>
            <div class="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="URL Image"/>
            </div>
              <button type="submit">add</button>
        </form>
      </div>
    )
  }
};

