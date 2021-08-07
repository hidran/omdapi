import MovieItem from './MovieItem';
const MovieList = ({ movies }) => {

    return (
        <div className='row'>
            {
                movies.map(movie =>  <MovieItem key={movie.imdbID} movie={movie} />)
            }
        </div>
    );
}
export default MovieList;