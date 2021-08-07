const MovieList = ({movies}) => {

    return (
        <ul>
          {movies.map(movie => <li key={movie.imbID}>{ movie.Title}</li>)}
        </ul>
    );
}
export default MovieList;