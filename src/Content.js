import React, { Component } from 'react';
import TitleList from './TitleList';
import { Link } from 'react-router-dom';
import Header from './Header';

class Content extends Component {
  render() {
    return (
      <div>
        <Header category="Titles" />
        <Link to="/movies" component={TitleList} category="movie">
          Movies
        </Link>
        <br />
        <Link to="/series" component={TitleList} category="series">
          Series
        </Link>
      </div>
    );
  }
}

export default Content;

setTimeout(3);
