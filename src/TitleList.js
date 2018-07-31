import React, { Component } from 'react';
import Title from './Title';
import getMovieList from './formatData';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
  }

  componentDidMount() {
    let movies = getMovieList(this.props.category);
    this.setState({ titles: movies });
    console.log(this.state.titles);
  }

  render() {
    const result = this.state.titles.map(a => {
      return (
        <div key={a.id}>
          <Title name={a.name} image={a.image} />
        </div>
      );
    });
    console.log('result', result);

    return <div> {result}</div>;
  }
}

export default TitleList;
