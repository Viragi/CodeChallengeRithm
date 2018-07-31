import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h4>Popular {this.props.category}</h4>
      </div>
    );
  }
}

export default Header;
