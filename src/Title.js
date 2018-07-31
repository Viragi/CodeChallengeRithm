import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
        <p> {this.props.name}</p>
      </div>
    );
  }
}

export default Title;
