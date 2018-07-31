import data from './sample.json';

function getMovieList(category = null) {
  const movies = [];
  let i = 0;
  while (movies.length <= 21) {
    console.log(data.entries[i]);
    if (
      data.entries[i].programType === category &&
      data.entries[i].releaseYear >= 2010
    ) {
      movies.push({
        name: data.entries[i].title,
        image: data.entries[i].images.poster_art.url
      });
    }
    i++;
  }
  movies.sort((a, b) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return movies;
}

export default getMovieList;
