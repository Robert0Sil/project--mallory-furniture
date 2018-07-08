import React, { Component } from 'react';

class NoMatch404 extends Component {
  render() {
    return (
      <div className="no-match-page">
        <h2 style={{color: 'tomato'}}>
          Sorry, this Page Does Not Exist
        </h2>
      </div>
    );
  }
}

export default NoMatch404;
