import MovieItem from './MovieItem';
const MovieList = ({ movies,onSelectMovie }) => {

    return (
        <div className='row d-flex justify-content-center'>
            {
                movies.map(movie =>  <MovieItem onSelectMovie = {onSelectMovie} key={movie.imdbID} movie={movie} />)
            }
        </div>
    );
}
export default MovieList;