import React, { Component } from 'react';
import Title from './Title';
import getMovieList from './formatData';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      isLoading: true
    };
  }

  componentDidMount() {
    try {
      this.timerID = setInterval(() => {
        let movies = getMovieList(this.props.category);
        this.setState({
          titles: movies,
          isLoading: false
        });
      }, 2000);

      console.log(this.state.titles);
    } catch (e) {
      return <h3>Opps, Something went Wrong</h3>;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
    if (this.state.isLoading === false) {
      return <div> {result}</div>;
    } else {
      return <h3>LOADING...</h3>;
    }
  }
}

export default TitleList;
