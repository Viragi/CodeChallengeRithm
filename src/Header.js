import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <div>{this.props.heading}</div>;
  }
}

export default Header;
