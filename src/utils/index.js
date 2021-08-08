const APIKEY =process.env.REACT_APP_APIKEY;

const APIURL =process.env.REACT_APP_APIURL;

const fetchMovies = async (search = 'The godfather') => {
  if (search.length < 3) {
    return;
  }
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
  const { Error, Search: movies, totalResults: totalCount } = response;
  
  return { movies, totalCount, Error: Error ?? '' };
}
const fetchMovieById = async (movieId) => {
 
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&i=' + movieId).then(res => res.json());
 
  return response;
}
export { fetchMovies, fetchMovieById , APIKEY, APIURL};