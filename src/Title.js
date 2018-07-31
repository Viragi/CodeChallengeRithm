import React, { Component } from 'react';

class Title extends Component {
  render() {
    const style = {
      height: '100px',
      width: '75px',
      display: ''
    };

    return (
      <div>
        <img src={this.props.image} style={style} />
        <p> {this.props.name}</p>
      </div>
    );
  }
}

export default Title;
