import React, { Component } from 'react';
import Title from './Title';
import data from './sample.json';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
  }

  componentDidMount() {
    this.getMovieList();
    console.log(this.state.titles);
  }

  getMovieList = () => {
    const movies = [];
    let i = 0;
    while (movies.length <= 21) {
      console.log(data.entries[i]);
      if (
        data.entries[i].programType === 'movie' &&
        data.entries[i].releaseYear >= 2010
      ) {
        movies.push({
          name: data.entries[i].title,
          image: data.entries[i].images.poster_art.url
        });
      }
      i++;
    }
    this.setState({ titles: movies });
  };

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
