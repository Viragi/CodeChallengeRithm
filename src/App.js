import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Welcome'
    };
  }

  render() {
    return (
      <div className="App">
        <Header heading={this.state.heading} />
        <Content />
      </div>
    );
  }
}

export default App;
