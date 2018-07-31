import React, { Component } from 'react';
import Title from './Title';
class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
  }
  render() {
    const result = this.state.titles.map(a => {
      return (
        <div key={a.id}>
          {' '}
          <Title name={a.title} image={a.img} />{' '}
        </div>
      );
    });
    return <div> {result}</div>;
  }
}

export default TitleList;
