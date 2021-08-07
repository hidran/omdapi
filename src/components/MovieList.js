import MovieItem from './MovieItem';
const MovieList = ({ movies }) => {

    return (
        <div className='row'>
            {
                movies.map(movie =>  <MovieItem movie={movie} />)
            }
        </div>
    );
}
export default MovieList;