import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import { Route, Switch } from 'react-router-dom';
import TitleList from './TitleList';

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
        <Switch>
          <Route exact path="/" component={Content} />
          <Route
            path="/movies"
            component={() => <TitleList category="movie" />}
          />
          <Route
            path="/series"
            component={() => <TitleList category="series" />}
          />
          <Route path="/" component={Content} />
        </Switch>
      </div>
    );
  }
}

export default App;
